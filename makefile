include .env.make
SHELL	=	/bin/bash
ROOT_DIR := $(dir $(realpath $(lastword $(MAKEFILE_LIST))))
PACKAGE_VERSION :=  $(shell cat $(ROOT_DIR)package.json | grep version | head -1 | sed -e 's/^[[:space:]]*//' | sed 's/[",]//g' |  awk -F: '{ print $$2 }' | sed -e 's/^[[:space:]]*//' )

PROJECT_NAME = iacdog-docs
LOCAL_TAG = local
tag = dev

test:
	@docker run -p 80:80 ${PROJECT_NAME}:${LOCAL_TAG}
login:
	@aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${REGISTRY}
dk-build:
	@docker build -t ${PROJECT_NAME}:${LOCAL_TAG} ./
tag: 
	@docker tag ${PROJECT_NAME}:${LOCAL_TAG} ${REGISTRY}/${REPOSITORY}:${tag}
	@docker tag ${PROJECT_NAME}:${LOCAL_TAG} ${REGISTRY}/${REPOSITORY}:${tag}-${PACKAGE_VERSION}
	@docker tag ${PROJECT_NAME}:${LOCAL_TAG} ${REGISTRY}/${REPOSITORY}:${tag}-latest
ifeq ($(tag), prod)
	@docker tag ${PROJECT_NAME}:${LOCAL_TAG} ${REGISTRY}/${REPOSITORY}:latest
endif
clean-dangling:
	@docker image rm -f $$(docker images | grep -E '<none>[^\S\r\n]+<none>' | awk '{print $3}' | sort | uniq)
push: 
	@docker push ${REGISTRY}/${REPOSITORY}:${tag}
	@docker push ${REGISTRY}/${REPOSITORY}:${tag}-${PACKAGE_VERSION}
	@docker push ${REGISTRY}/${REPOSITORY}:${tag}-latest
ifeq ($(tag), prod)
	@docker push ${REGISTRY}/${REPOSITORY}:latest
endif
publish: login build tag push