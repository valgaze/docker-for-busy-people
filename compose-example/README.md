## Docker Compose Example

In this simple example we have two servers-- server1 and server2 running on ports 8000 and 8001 respectively. Server2 will generate our data and server1 will retrieve it.

Note in [server1](./server1/server.js) when we specify server we DO NOT use http://localhost:8001 because localhost would refer to server1's localhost not the host machine's. In Docker-Compose, when you specify a name for a service you can use that name to resolve to that container's IP address.

From the compose-example directory run the following to start (make sure nothing is running on ports 8000 or 8001):

```sh
docker-compose up
```


Access the application on http://localhost:8000 and refresh to obtain a new random number generated from server2

To shut down run:

```sh
docker-compose down #if any trouble, run $ docker rm -f $(docker ps -q)
```