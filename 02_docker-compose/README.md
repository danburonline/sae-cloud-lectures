# Docker Compose

This repository contains an example backend app. Next to it is the key artifact: the Dockerfile, which demonstrates Docker and the process of dockerizing an application and also a docker-compose.yml file, which demonstrates Docker Compose and the process of orchestrating multiple containers.

## Quick Setup

1. Install Docker and Docker Compose
2. Install all dependencies via `bun install`
3. Run `docker compose up -d` to start the application's dependencies in the background
4. Run `bun run dev` to start the application

## Two dependencies the backend app relies on

1. PostgreSQL
2. Redis
