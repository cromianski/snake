#!/bin/bash

docker stop snake_js;
docker rm snake_js;
docker build --no-cache -t snake_js .;
docker run --name snake_js -p 80:80 -d snake_js;
docker ps;