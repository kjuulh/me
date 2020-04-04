build-prod:
	yarn --cwd "./app"
	yarn --cwd "./app" build
	mv ./app/dist .

docker-build:
	docker build -f build/Dockerfile -t kjuulh/me:dev .

docker-build-prod:
	docker build -f build/prod.Dockerfile -t kjuulh/me .

docker-run:
	docker run -d -v ${PWD}/app:/app -v /app/node_modules -p 4201:4200 --name me --rm kjuulh/me:dev

docker-run-prod:
	docker run -it -p 4201:8080 --name me --rm kjuulh/me

docker-test: docker-build docker-run
	docker exec -it me ng test --watch=false
	docker exec -it me ng e2e --port 4202
	docker stop me

