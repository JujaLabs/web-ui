#!/bin/bash
# Use dev pipeline for deploy because production pipeline terminates with error 
# When error will be fixed use this command to build ng build --prod
ng build
rm -rf dist/*.map

docker build . -t juja/web-ui:latest