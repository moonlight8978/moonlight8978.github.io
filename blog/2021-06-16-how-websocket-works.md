---
slug: websocket-hoat-dong-nhu-the-nao
title: WebSocket hoạt động như thế nào?
author: Lê Sĩ Bích
author_title: Ruby on Rails/React Developer
author_url: https://github.com/moonlight8978
author_image_url: https://avatars.githubusercontent.com/u/26299310?v=4
tags: [websocket, javascript, web]
---

## WebSocket là gì

Cũng giống như HTTP, WebSocket là 1 protocol, hoạt động trên mô hình client/server, và sử dụng TCP connection.
Là một protocol, có nghĩa là bất kể việc implement ra sao, nhưng server cứ lắng nghe 1 TCP port, và giao tiếp giữa client/server tuân theo đúng spec mà WebSocket đề ra là được.

WebSocket cho phép trao đổi dữ liệu 2 chiều giữa client và server. Tuy nhiên chắc sẽ có nhiều người thắc mắc

> Sao không dùng HTTP rồi set interval request lên, hay là server push cho đơn giản. Đẻ ra lắm protocol làm gì đau đầu?

Nếu sử dụng HTTP, mỗi lần cập nhật data mới thì client lại phải tạo request HTTP, và sẽ có rất nhiều header dư thừa, gây lãng phí băng thông, và việc khởi tạo request cũng mất thêm 1 chút thời gian. Trong khi đó WebSocket, sau khi client và server _say hello_ với nhau, TCP connection sẽ vẫn alive, và chúng sẽ giao lưu kết hợp với nhau qua connection đó mà không cần thêm những thông tin dư thừa như header. Và có lẽ còn nhiều lợi ích nữa, nhưng mình không biết =))

Khen thế đủ rồi, hãy thử tìm hiểu xem WebSocket ngang dọc ra sao.

## Cách hoạt động của WebSocket

### Tiền đề

Ví dụ với ứng dụng mạng xã hội, ta có 1 tính năng chat. Mỗi khi bật chat với 1 người, 1 WebSocket tới webserver của ta sẽ được khởi tạo. Như vậy, ta đang có 1 webserver, và đang cần 1 websocket connection tới webserver đó. Mặt khác việc sử dụng raw TCP trên client cũng rất hạn chế. Chính vì vậy, WebSocket đã tận dụng luôn port 80/443 của HTTP(S) để khởi tạo connection.

### Handshaking

Khi khởi tạo connection, client sẽ tạo 1 HTTP request để thực hiện _handshake_ với server

![handshake](/img/blog/websocket-handshake.jpeg)

- Trước tiên client sẽ gửi request tới endpoint mà websocket server đang lắng nghe. ví dụ như `/chat`.
  Request sẽ kèm theo 1 vài header mà WebSocket protocol quy định: `Sec-WebSocket-Key`, `Sec-WebSocket-Version`, `Upgrade`, `Connection`, ... và những header cơ bản của 1 HTTP request khác nữa.

- WebSocket server sẽ tiếp nhận request, authen (nếu có), nếu không hợp lệ sẽ trả về `400 Bad Request` và terminate connection đó.
  Ngược lại nếu OK, server sẽ trả về `101 Switching Protocols` cùng với header `Sec-WebSocket-Accept`. Connection đó sẽ được giữ, và sau đó client và server bắt đầu trao đổi thông tin qua lại với nhau.

Giá trị của `Sec-WebSocket-Accept` được quy định như sau:

```txt
Sec-WebSocket-Accept = Base64( SHA1 ( Sec-WebSocket-Key + 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 ) )
```

`258EAFA5-E914-47DA-95CA-C5AB0DC85B11` còn được gọi là _magic string_

### Trao đổi dữ liệu

Việc trao đổi dữ liệu giữa client và server khá là hại não, cụ thể việc decode message, hay format message có thể xem thêm tại [đây](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#exchanging_data_frames). Giữ chỗ để sau này nếu không ~~lười~~ bận quay lại tìm hiểu sau =))

Trong quá trình connection được keep alive, sẽ có rất nhiều request ping giữa client/server để kiểm tra xem phía bên kia còn active hay không. Bên gửi ping, bên nhận pong, vẫn còn sống thì ta lại giao lưu kết hợp tiếp. Còn không thì server/client sẽ biết để terminate inactive connection đó đi.

## Tham khảo

- https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers

- https://stackoverflow.com/questions/50197453/how-long-can-a-websocket-connection-last

- https://datatracker.ietf.org/doc/html/rfc6455
