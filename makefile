include .env.make

PROJECT_NAME = iacdog-docs
LOCAL_TAG = local
tag = dev
stage = production


test:
	docker run -p 80:80 ${PROJECT_NAME}:${LOCAL_TAG}
login:
	aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${REGISTRY}
dk-build:
	docker build -t ${PROJECT_NAME}:${LOCAL_TAG} ./
tag: 
	docker tag ${PROJECT_NAME}:${LOCAL_TAG} ${REGISTRY}/${REPOSITORY}:${tag}
clean-dangling:
	docker image rm -f $$(docker images | grep -E '<none>[^\S\r\n]+<none>' | awk '{print $3}' | sort | uniq)
push: 
	docker push ${REGISTRY}/${REPOSITORY}:${tag}

publish: login build tag push