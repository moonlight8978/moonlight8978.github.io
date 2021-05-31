---
slug: cung-tim-hieu-ve-puma-ruby-on-rails
title: Cùng tìm hiểu về Puma (Ruby on Rails)
author: Lê Sĩ Bích
author_title: Ruby on Rails/React Developer
author_url: https://github.com/moonlight8978
# author_image_url:
tags: [puma, ruby-on-rails, multi-threading, multi-processing]
---

## 1. Mở đầu

Chắc hẳn Puma không phải một cái tên xa lạ đối với mỗi Rails developer, một phần cũng vì đây là appserver mặc định khi tạo mới một project Rails.

Hãy cùng nhìn qua những config cơ bản khi chạy 1 ứng dụng Rails với Puma server. [link](https://github.com/rails/rails/blob/0f5700ac3589081126fbfde1e4037dc1d4166cce/railties/lib/rails/generators/rails/app/templates/config/puma.rb.tt)

```ruby title=config/puma.rb
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

port ENV.fetch("PORT") { 3000 }

environment ENV.fetch("RAILS_ENV") { "development" }

pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

workers ENV.fetch("WEB_CONCURRENCY") { 2 }

preload_app!

plugin :tmp_restart
```

Đối với những người mới bắt đầu, khi deploy puma, có lẽ sẽ từ chối hiểu đống config trên và set một số biến môi trường như sau:

- `WEB_CONCURRENCY`: bằng với số lượng vcore/process của máy
- `RAILS_MAX_THREADS`: ờ thì nhiều RAM thì set 16, 32 cho oách, không thì thôi dùng mặc định 5 và mặc do dòng đời xô đẩy :v

Hãy cùng tìm hiểu thêm về Puma để góp phần làm chủ từng dòng code trong app của chúng ta.

## 2. Multi-processing và Multi-threading

### 2.1. Puma dùng loại nào?

- Khi chạy 1 Rails app mới tạo, hãy để ý lúc boot server, bạn sẽ thấy:

```log
Puma starting in single mode...
* Puma version: 5.3.1 (ruby 3.0.1-p64) ("Sweetnighter")
*  Min threads: 5
*  Max threads: 5
*  Environment: development
*          PID: 1
* Listening on http://0.0.0.0:3000
Use Ctrl-C to stop
```

Đây là dấu hiệu cho ta thấy, Rails đang chạy ở chế độ single process (1 process), và multi-thread (cụ thể là 5 thread)

- Còn khi config deploy, có thể bạn sẽ được 1 người có kinh nghiệm hơn bảo rằng *"Bỏ comment cái dòng `workers ENV.fetch("WEB_CONCURRENCY") { 2 }` đi em êi"*

Và đây là kết quả khi ta làm như vậy

```log
[1] Puma starting in cluster mode...
[1] * Puma version: 5.3.1 (ruby 3.0.1-p64) ("Sweetnighter")
[1] *  Min threads: 5
[1] *  Max threads: 5
[1] *  Environment: development
[1] *   Master PID: 1
[1] *      Workers: 2
[1] *     Restarts: (���) hot (���) phased
[1] * Preloading application
[1] * Listening on htp://0.0.0.0:3000
[1] Use Ctrl-C to stop
[1] - Worker 0 (PID: 16) booted in 0.02s, phase: 0
[1] - Worker 1 (PID: 17) booted in 0.05s, phase: 0
```

Puma đang chạy đồng thời multi-process (2 process) và multi-thread (5 thread)

>Multi-process, multi-thread là cái của nợ gì vậy?

Chúng ta sẽ tìm hiểu về nó ngay sau đây. Tuy nhiên chúng ta sẽ focus vào cluster mode của Puma nhé.

### 2.2. Multi-threading

Trước tiên ta hãy nhớ lại định nghĩa về `process` - tiến trình, mỗi khi ta chạy 1 command nào đó (ví dụ như `ruby xxx.rb` hay bật chrome chẳng hạn), OS sẽ tạo 1 process để xử lý command của ta.

Mỗi *process* có thể tạo ra nhiều *thread* để xử lý task (ví dụ mỗi tab chrome được handle bởi 1 thread). Các thread được tạo bởi 1 process sẽ share nhau 1 vùng nhớ (memory), trong shared memory này, mỗi thread sẽ có stack, register (google để biết thêm đống này là gì =)) ) riêng của mình. Tuy nhiên, việc chung đụng memory như trên sẽ dẫn đến 1 vấn đề là nhiều thread cùng chọc tới 1 resource nào đó, dẫn tới conflict về data, hay còn được biết đến với cái tên nguy hiểm hơn là **race condition**. Code của ta sẽ cần *thread-safe* (các bạn có thể google thêm :v)

Đối với ứng dụng Ruby thì khi chạy ở môi trường MRI... À đấy lại nhắc tới MRI, chắc nhiều người sẽ thắc mắc liệu đó là gì. Đây là tên của 1 Ruby Runtime. Ruby 1 chuẩn spec, implement kiểu gì cũng được, miễn là đáp ứng được spec đó thì đều là Ruby. Có thể kể đến các Runtime phổ biến sau

- MRI - aka CRuby: Matz’s Ruby Interpreter (Matz - hay Matsumoto Yukihiro) là người tạo ra runtime này, được viết bằng C, nên còn gọi là CRuby

  Đa số là dùng MRI

- JRuby: Ruby implement bằng Java

- Rubinius

- mruby

- ...

MRI có 1 cơ chế là **Global Interpreter Lock** (GIL), khi chạy multi-thread, nó chỉ cho phép 1 thread chạy source code Ruby tại 1 thời điểm, nên là ta có nhiều thread đi chăng nữa thì cũng chỉ có 1 thread được chạy mà thôi.

Tuy nhiên với các thao tác IO như đọc DB, request external resource, đọc ghi file, ... thì GIL không block. Puma đã tận dụng điều này, khi 1 thread đang xử lý IO, nó sẽ quay trở lại xử lý ở process, nhận thêm các request khác để xử lý.

Chính vì vậy, ngay cả khi chỉ chạy ở single mode, Puma vẫn có thể handle được concurrent request. Tuy nhiên với các request cần thời gian dài để xử lý, do chỉ có 1 thread được chạy, nên request sau sẽ phải chờ request trước xử lý xong, dẫn đến Puma bị thọt trong trường hợp này.

Ta có thể kiểm tra về trạng thái các thread của Puma bằng đoạn code sau:

```ruby title=app/controllers/homes_controller.rb
class HomesController < ApplicationController
  def show
    Thread.list.select { |t| t.name&.match?(/puma threadpool \d+/) }.each do |t|
      Rails.logger.info("Thread #{t.name}: #{t.status}, alive: #{t.alive?}, current: #{t == Thread.current}")
    end
    head :ok
  end
end
```

Vì sao lại là `/puma threadpool \d+/`? Các bạn có thể xem tại [đây](https://github.com/puma/puma/blob/3e80f7c704e5585da4faa32edf0fa7a0abed3689/lib/puma/thread_pool.rb#L104).

```ruby title=config/routes.rb
Rails.application.routes.draw do
  resource :home
end
```

```ruby title=config/puma.rb
max_threads_count = ENV.fetch('RAILS_MAX_THREADS', 5)
min_threads_count = ENV.fetch('RAILS_MIN_THREADS') { max_threads_count }
threads min_threads_count, max_threads_count
worker_timeout 3600 if ENV.fetch('RAILS_ENV', 'development') == 'development'
port ENV.fetch('PORT', 3000)
environment ENV.fetch('RAILS_ENV', 'development')
pidfile ENV.fetch('PIDFILE', 'tmp/pids/server.pid')
plugin :tmp_restart
```

```curl
curl http://localhost:3000/home
tail -n 50 log/development.log
```

Và đây là output:

```log
Thread puma threadpool 001: sleep, alive: true, current: false
Thread puma threadpool 002: sleep, alive: true, current: false
Thread puma threadpool 003: sleep, alive: true, current: false
Thread puma threadpool 004: sleep, alive: true, current: false
Thread puma threadpool 005: run, alive: true, current: true
```

Đó chính là 5 thread của chúng ta, như ví dụ là thread 5 đang tiến hành xử lý request, còn những thread khác nếu rảnh nó sẽ ở trạng thái `sleep`. Ở đây có 1 điểm đáng chú ý là sau khi kết thúc request, thread không bị kill mà chỉ về trạng thái `sleep`, do vậy nếu ta tuỳ tiện modify biến global, nó sẽ ảnh hưởng tới request tiếp theo mà thread đó handle.

Ví dụ:

```ruby
before_action :set_locale

def set_locale
  I18n.locale = params[:locale] || I18n.default_locale
end
```

Không cần biết code cái gì, nhưng modify 1 biến global tại runtime như trên là đã thấy nguy hiểm rồi. Và ta hãy tiến hành test xem

```ruby title=app/controllers/homes_controller.rb
class HomesController < ApplicationController
  def show
    Thread.current.tap { |t| Rails.logger.info("Current thread #{t.name}: #{t.status}, alive: #{t.alive?}") }
    Rails.logger.info("Before: #{I18n.locale}")
    I18n.locale = params[:locale]
    Rails.logger.info("After: #{I18n.locale}")
    head :ok
  end
end
```

rồi sau đó spam khoảng chục cái request

```bash
curl http://localhost:3000/home?locale=vi
```

và ta sẽ thấy kết quả như sau

```log title=log/development.log
Current thread puma threadpool 003: run, alive: true
Before: en
After: vi

Current thread puma threadpool 003: run, alive: true
Before: vi
After: vi
```

Có thể dễ dàng nhận ra rằng việc set `I18n.locale = "vi"` ở request trước đã bị leak sang request sau. Nếu ở tất cả các request, trước khi xử lý ta đều set `I18n.locale` thì việc leak trên sẽ ít ảnh hưởng hơn.

Tuy nhiên hãy thử tưởng tượng khi app của bạn có chứa cả code admin và api, bên admin có thể đổi ngôn ngữ, còn api thì không, thì kết quả sẽ ra sao. Khi admin đổi ngôn ngữ, tình cờ, 1 user vô phúc nào đó request tới trúng cái thread vừa handle việc admin đổi ngôn ngữ, và API sẽ trả về locale của ông admin kia :v

Chính vì vậy, ở docs của Rails cũng có recommend chúng ta xử lý chuyển locale bằng `I18n.with_locale`, các bạn có thể xem tại [đây](https://guides.rubyonrails.org/i18n.html#managing-the-locale-across-requests)

```ruby
around_action :switch_locale

def switch_locale(&action)
  locale = params[:locale] || I18n.default_locale
  I18n.with_locale(locale, &action)
end
```

Túm váy lại là multi-threading hỗ trợ concurrent rất tốt, tuy nhiên cũng ẩn chứa 1 vài vấn đề. Nên sẽ cần chú ý hơn khi code.

### 2.3. Multi-processing

Máy tính hiện nay đa số đều có khá nhiều core, và đều hỗ trợ đa nhiệm để tối ưu hoá việc xử lý song song. Vậy với webserver thì sao? Có cần chứ, multi-processing giúp ta có thể xử lý thêm nhiều request đồng thời hơn nữa. Trừ khi server của ta quá yếu, chứ không thì tội gì, nhà chả có gì ngoài core mà lại chạy đơn nhân thì phí của giời quá :v

Mặc định Puma sẽ chạy ở single mode, khi đó chỉ có 1 process, process này sẽ đảm nhận hết từ việc lưu code của app, tiếp nhận request, ... sau đó sẽ đẩy request sang cho các thread xử lý như đã mô tả ở trên.

Còn đối với cluster mode, trước hết Puma sẽ tạo ra một master process. Từ process này, dựa vào giá trị của config dưới, Puma sẽ *fork* để tạo ra số process tương ứng, hay còn gọi là *worker*.

```ruby title=config/puma.rb
workers ENV.fetch("WEB_CONCURRENCY") { 2 }
```

Lại nói về fork, đây là quá trình mà 1 process tạo ra 1 process mới, gọi là *child process*. Mỗi child process đều có process id (PID) riêng biệt, và một môi trường riêng tách biệt hoàn toàn với parent process (source code, memory, stack, ...). Không như thread vẫn share code với process, nhưng có stack, register riêng. Do vậy, có thể nói forking an toàn và bảo mật hơn so với multi-thread.

Quay trở lại với Puma, ở cluster mode, master process chỉ đảm nhận việc tiếp nhận request, sau đó sẽ bắn sang các worker để chúng tự xử với các thread mà chúng spawn. Các worker của Puma đều có 1 bản copy source code app riêng, nên khi chạy nhiều worker, hãy chắc chắn là server của bạn có đủ RAM :v

Ở Ruby, có thể kiểm tra xem app của ta đang chạy ở process nào bằng cách sử dụng

```ruby
Process.pid  # Current child process
Process.ppid # Parent process
```

Hãy thử ở app Rails của ta xem

```ruby title=app/controllers/homes_controller.rb
class HomesController < ApplicationController
  def show
    Rails.logger.info("Current: #{Process.pid}. Parent: #{Process.ppid}")
    head :ok
  end
end
```

```ruby title=config/puma.rb
# ...
workers 2
```

```log title=log/development.log
Processing by HomesController#show as */*
Current: 128. Parent: 1

Processing by HomesController#show as */*
Current: 129. Parent: 1
```

```bash
ps aux
# USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
# root         1  0.5  7.1 236000 145864 pts/0   Ssl+ 03:28   0:04 puma 5.3.1 (tcp://0.0.0.0:3000) [app]
# root         7  0.0  0.1   3544  3192 pts/1    Ss   03:29   0:00 zsh
# root       128  0.0  6.9 288680 142008 pts/0   Sl+  03:29   0:00 puma: cluster worker 0: 1 [app]
# root       129  0.0  6.9 288720 142116 pts/0   Sl+  03:29   0:00 puma: cluster worker 1: 1 [app]
# root       219  0.0  0.0   1640   856 pts/1    R+   03:40   0:00 ps aux
```

## 3. Kết luận

Cả multi-threading và multi-processing đều quan trọng, chúng góp phần giúp app ta xử lý đc concurrent request. Hy vọng bài viết có thể giúp ích cho các bạn ít nhiều.

Ngoài ra, về vấn đề set số worker và thread ở phần đầu đã nói, tốt nhất chắc vẫn là:

- `WEB_CONCURRENCY` = vcore, ngoài ra còn phụ thuộc vào RAM nữa
- `RAILS_MAX_THREADS` không có con số cụ thể, phụ thuộc vào RAM và CPU, nhiều RAM, CPU khoẻ thì set được càng nhiều, nhưng cũng khá là hên xui, phải tiến hành test rồi mới căn chỉnh con số phù hợp được =))

Nếu có sai sót gì các bạn cứ gạch đá thoải mái à :v chi tiết có thể tham khảo ở [đây](https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server#workers)

## 4. Tham khảo

- https://www.speedshop.co/2015/07/29/scaling-ruby-apps-to-1000-rpm.html
- https://devcenter.heroku.com/articles/concurrency-and-database-connections
- https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server
- http://www.geekride.com/fork-forking-vs-threading-thread-linux-kernel/
- https://www.studytonight.com/operating-system/multithreading
- https://www.tutorialspoint.com/how-to-create-a-process-in-linux#:~:text=A%20new%20process%20can%20be,newly%20is%20called%20child%20process.

