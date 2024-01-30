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

## Apply Terraform infrastructure (Infrastructure as Code)

0. Don't forget to set the AWS credentials on your computer via `aws configure` (be sure to have the AWS CLI installed)
1. Install Terraform
2. Run `terraform init` to initialise the Terraform configuration inside the `infrastructure`` directory
3. Run `terraform plan` to see what changes Terraform will apply
4. Run `terraform apply` to apply the changes onto AWS
5. Run `terraform destroy` to destroy the infrastructure on AWS to avoid incurring costs
