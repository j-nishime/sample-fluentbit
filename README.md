# sample-fluentbit
This is fluentbit test repository.

# How to

```
$ docker-compose up
$ curl http://localhost:10080/      // -> log send to stdout
$ curl http://localhost:10080/hello // -> log send to datadog
$ curl http://localhost:10080/test  // -> log send to datadog
```