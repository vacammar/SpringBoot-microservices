#!/bin/bash

export CHANGE_MINIKUBE_NONE_USER=true

#export no_proxy=localhost,127.0.0.1,10.96.0.0/12,192.168.0.0/16

printf -v proxy "%q" $HTTP_PROXY

echo "proxy evalueted to $proxy"

minikube config set cpus 4

minikube config set memory 8192

minikube config set disk-size 50g

minikube addons enable ingress

minikube start --docker-env HTTP_PROXY="$proxy" --docker-env HTTPS_PROXY="$proxy" --docker-env NO_PROXY="$NO_PROXY" --vm-driver=kvm2
