import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
  private s3: S3Client;

  constructor(private configService: ConfigService) {
    this.s3 = new S3Client({
      region: this.configService.get('AWS_REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  async uploadFile(file: Express.Multer.File, bucketName: string) {
    const uploadResult = await this.s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: file.originalname,
        Body: file.buffer,
      }),
    );

    return uploadResult;
  }

  // Method to list all files in a bucket
  async listFiles(bucketName: string) {
    const command = new ListObjectsCommand({ Bucket: bucketName });
    const response = await this.s3.send(command);
    return response.Contents;
  }

  // Method to create a signed URL for temporary file access
  async getSignedUrl(
    bucketName: string,
    fileName: string,
    expiresIn: number = 3600,
  ) {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileName,
    });

    const signedUrl = await getSignedUrl(this.s3, command, { expiresIn });

    return signedUrl;
  }
}
