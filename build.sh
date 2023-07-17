#!/bin/bash

taskID=$(docker ps | grep "sigmamobil:latest" | cut -d " " -f1)

[[ ! -z $taskID ]] && docker kill $taskID

docker build . -t sigmamobil:latest

docker run -it --rm -d -p 8080:80/tcp --name sigmamobil.cz sigmamobil:latest