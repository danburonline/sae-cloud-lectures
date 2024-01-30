provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "example_bucket" {
  bucket = "sae-cloud-lecture"
}
