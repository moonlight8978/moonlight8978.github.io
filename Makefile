.PHONY: flow up down build install

flow:
	docker-compose exec flow yarn flow

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

install:
	docker-compose run --rm web yarn

test:
	docker-compose exec web yarn test:unit $(filter-out $@,$(MAKECMDGOALS))

test-debug:
	docker-compose exec web yarn test:unit:debug $(filter-out $@,$(MAKECMDGOALS))
