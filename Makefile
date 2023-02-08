PHONY: dev build preview deploy

dev:
	@pnpm docs:dev

build:
	@pnpm docs:build

preview:
	@pnpm docs:preview

deploy:
	@pnpm docs:deploy