# SAE Cloud Lectures

This repository contains an example backend application for the SAE Cloud Lectures. It demonstrates the use of Docker, Docker Compose, AWS S3, and Terraform in conjunction with Localstack.

## How to run the Dockerfiles

### Build the Docker images

```bash
docker build -t sae-cloud-lectures-backend:latest .
```

### Run the Docker containers

```bash
docker run -p 3000:3000 --name running-container sae-cloud-lectures-backend:latest
```

### Stop the Docker containers

```bash
docker stop running-container
```

## Push the Docker image to Docker Hub

### Login to Docker Hub

```bash
docker login
```

### Tag the Docker image

```bash
docker tag sae-cloud-lectures-backend:latest <your-docker-hub-username>/sae-cloud-lectures-backend:latest
```

### Push the Docker image

```bash
docker push <your-docker-hub-username>/sae-cloud-lectures-backend:latest
```

### Remove the Docker containers

```bash
docker rm running-container
```

### Remove the Docker images

```bash
docker rmi sae-cloud-lectures-backend:latest
```

## Warning for Mac users

If you are using Docker on a Mac, you need to use the following flag and append it to the `docker build` command:

```bash
--platform linux/amd64
```

> More on this in the lecture

## How to run the Docker Compose file

### Build the Docker compose images

```bash
docker compose build
```

### Run the Docker compose containers

```bash
docker compose up -d
```

### Stop the Docker compose containers

```bash
docker-compose down
```
