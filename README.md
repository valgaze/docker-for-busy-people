## Docker for busy people
Bare minimum to become slightly dangerous

Companion blog post & explanation here: https://medium.com/@valgaze/utility-post-docker-for-busy-people-fffde73bc59a#.hdd53k7ix


## Docker Compose

See the **[compose-example](compose-example)** directory for a simple example of using [Docker Compose](https://docs.docker.com/compose/overview/) to start two containers & share data from one to the other


# tl;dr version:


## Clone repo

```sh
$ git clone https://github.com/valgaze/docker-for-busy-people && cd docker-for-busy-people
```

## CD to _tmpDockerfile & build an image named "my_image"

```sh
$ docker build -t my_image .
```

## Create a container named "my_container_1" that exposes port 8000 externally as 1234

```sh
$ docker create --name my_container_1 -p 1234:8000 -v /Users/YOUR_ABSOLUTE_PATH/docker-for-busy-people:/usr/applicationSrc my_image
```
## Start my_container_1

```sh
$ docker start my_container_1
```
## Check the logs

```sh
$ docker logs my_container_1
```

## Access on http://localhost:8000 or if you have docker-machine, use:

```sh
$ open http://$(docker-machine ip):1234
```

## Create (and immediately start) a container named "my_container_2" and pass in an environmental variable to make the application run on port 1234 externally and then expose 1234 externally on port 8000

```sh
$ docker run --name my_container_2 --env SPECIAL_PORT=1234 -p 8000:1234 -v /Users/YOUR_ABSOLUTE_PATH/docker-for-busy-people:/usr/applicationSrc my_image
```

## Inspect the logs

```sh
$ docker logs my_container_2
```

## Stop containers

```sh
$ docker stop my_container_1 my_container_2
```

## Delete containers

```sh
$ docker rm my_container_1 my_container_2
```

## Delete Images

```sh
$ docker rmi my_image
```



