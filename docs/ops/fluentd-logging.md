# Logging with Fluentd, Logrorate

## No extra server required

### Overview

- Basic flow: Input => Filter => Output

  - Input:

    - How to get log
      - Listen on UDP traffic
      - Tail a system file
    - `parser` can be applied to get right log format

  - Filter:

    - Apply transformation to event

      - Add custom attribute
      - Parse log file

    - Raw log go through `parser` will become `log event`

      ```txt
      tag:    app.event
      time:   1362020400t
      record: {"host":"192.168.0.1","size":777,"method":"PUT"}
      ```

  - Output:

    - How to store/forward the log event
      - Save in elasticsearch
      - Save to file
      - Save to S3
    - Each output has default `formatter` to format log event to appropriate format
      - `out_file` has `out_file` formatter as default which will transform log event into `<time>\t<tag>\t<record>`
      - `single_value` to output single field on `record`, which default is `message`

  - E.g:

    - Combine `none` parser with `single_value` as output formatter, we will get

      - Raw log: `2021-01-01 GET /test 200 OK`

      - Log event: raw log will be wrapped to `message` key

        ```txt
        tag:    app.event
        time:   1362020400t
        record: {"message":"2021-01-01 GET /test 200 OK"}
        ```

      - Output: Only `message` key on record is exported

        ```txt
        2021-01-01 GET /test 200 OK\n
        ```

#### Install on Linux AMI 2

- Installation

  ```bash
  # https://docs.fluentd.org/installation/install-by-rpm#amazon-linux
  curl -L https://toolbelt.treasuredata.com/sh/install-amazon2-td-agent4.sh | sh
  ```

- Plugins

  ```bash
  sudo td-agent-gem install fluent-plugin-multi-format-parser
  ```

- Configuration file

  ```bash
  sudo vim /etc/td-agent/td-agent.conf
  ```

  ```bash
  td-agent -c /etc/td-agent/td-agent.conf
  ```

- Service configuration file

  ```bash
  sudo vim /usr/lib/systemd/system/td-agent.service
  ```

- Service log

  ```bash
  cat /var/log/td-agent/td-agent.log
  ```

### Config

```apacheconf
<source>
  @type tail
  read_from_head true
  path /home/deploy/app/current/log/production.log
  pos_file /var/log/td-agent/app.log.pos

  <parse>
    @type none
  </parse>

  tag app.rails.production
</source>

<match app.**>
  @type s3
  s3_bucket bucket-name
  s3_object_key_format "%{path}#{Socket.gethostname}_%{index}.%{file_extension}"
  path "#{DateTime.now.strftime('%Y%m%d%H%M')}"

  time_slice_format %Y%m%d
  store_as txt

  <format>
    @type single_value
  </format>

  <buffer>
    @type file
    path /var/log/td-agent/s3
    timekey 1h
    timekey_wait 5m
    chunk_limit_size 256m
    flush_at_shutdown true
  </buffer>
</match>
```

### Workaround when combine with logrotate

https://github.com/common-voice/common-voice/pull/848/files

- Add `flush_at_shutdown true` to output plugin buffer

- Stop fluentd to upload current progress, then remove the pos and restart fluentd to tail the log file from the beginning

```txt title=/etc/logrotate.d/rails
/root/rails-exploration/log/production.log {
  prerotate
    /bin/systemctl stop td-agent
  endscript

  su deploy deploy
  daily
  missingok
  rotate 7
  compress
  delaycompress
  notifempty
  copytruncate

  postrotate
    /bin/rm -f /var/log/td-agent/*.pos
    /bin/systemctl start td-agent
  endscript
}
```

- To trigger rotation manually

```bash
logrotate --force /etc/logrotate.d/rails
```
