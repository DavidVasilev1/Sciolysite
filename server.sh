#!/bin/bash

port=4200
repo_name=davidblog
log_file="/tmp/jekyll${port}.log"
# Exceptions will stop make
shell="/bin/bash"

function stop () {
    echo "Stopping server..."
    lsof -ti :$port | xargs kill >/dev/null 2>&1 || true
    echo "Stopping logging process..."
    ps aux | awk -v log_file=$log_file '$$0 ~ "tail -f " log_file { print $$2 }' | xargs kill >/dev/null 2>&1 || true
    rm -f $log_file
}

function server () {
    stop
    jekyll clean
    echo "Starting server..."
    bundle exec jekyll serve
}

server