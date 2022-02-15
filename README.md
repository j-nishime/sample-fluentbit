# sample-fluentbit
This is fluentbit test repository.

# How to

```
$ cp -p .env.example .env
$ vim .env                          // add DATADOG_API_KEY value
$ docker-compose up
$ curl http://localhost:10080/      // -> log send to stdout
$ curl http://localhost:10080/hello // -> log send to datadog
$ curl http://localhost:10080/test  // -> log send to datadog
```
