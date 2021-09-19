.PHONY: help
help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# =====================================================================
# Docker variables and exports ========================================
# =====================================================================

CURRENT_DIR = $(shell pwd)
USER_ID = $(shell id -u)
GROUP_ID = $(shell id -g)

export UID = $(USER_ID)
export GID = $(GROUP_ID)

# =====================
# Install =============
# =====================

create-cert: ## create local ssl certificate (need to install mkcert https://github.com/FiloSottile/mkcert#linux)
	mkdir -p ./infrastructure && \
	mkdir -p ./infrastructure/tls && cd ./infrastructure/tls && \
	mkcert react-esi.local && \
	mkcert -install

install: ## install js dependencies
	docker-compose run --no-deps --rm next bash -ci 'npm install --force'

# =====================
# Development =========
# =====================

.PHONY: start
start: ## start local dev environment in docker containers
	docker-compose up -d

.PHONY: stop
stop: ## stop dockerised local dev environment
	docker-compose down

.PHONY: logs
logs: ## display dockerised local dev environment logs
	docker-compose logs -f

# =====================
# Production  =========
# =====================

DOCKER_COMPOSE_PROD := docker-compose -p react-esi-prod -f docker-compose-prod.yml

.PHONY: build
build: ## build for production
	mkdir -p ./dist
	rm -rf dist/*
	$(DOCKER_COMPOSE_PROD) run --no-deps --rm next bash -ci 'npm run build'

.PHONY: prod-start
prod-start: build ## start production build
	$(DOCKER_COMPOSE_PROD) up -d

.PHONY: prod-stop
prod-stop: ## stop production build
	($(DOCKER_COMPOSE_PROD) down && $(DOCKER_COMPOSE_PROD) rm -f) || true

.PHONY: prod-logs
prod-logs: ## display logs of production build
	${DOCKER_COMPOSE_PROD} logs -f
