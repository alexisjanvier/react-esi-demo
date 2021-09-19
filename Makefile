.PHONY: help
help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# =====================
# Install =============
# =====================

create-cert: ## create local ssl certificate (need to install mkcert https://github.com/FiloSottile/mkcert#linux)
	mkdir -p ./infrastructure && \
	mkdir -p ./infrastructure/tls && cd ./infrastructure/tls && \
	mkcert react-esi.local && \
	mkcert -install

install: ## install js dependencies
	docker-compose run --no-deps --rm next ash -ci 'npm install'

# =====================
# Development =========
# =====================

start: ## start local dev environment in docker containers
	docker-compose up -d

stop: ## stop dockerised local dev environment
	docker-compose down

logs: ## display dockerised local dev environment logs
	docker-compose logs -f
