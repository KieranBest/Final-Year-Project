DOCKER_IMAGE:=client

build:
	docker build --tag ${DOCKER_IMAGE} .

run:
	docker run --rm -it --publish 3001:3001 ${DOCKER_IMAGE}