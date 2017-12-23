#!/bin/bash
ng build --prod
docker build . -t juja/web-ui:latest