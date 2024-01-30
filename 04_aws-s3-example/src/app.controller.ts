import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { S3Service } from './s3.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly s3Service: S3Service,
  ) {}

  @Get()
  async getRandomData(): Promise<{
    version: number;
    timestamp: string;
    currentRandomWords: string;
    previousRandomWords: string;
  }> {
    return await this.appService.getRandomData();
  }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('files')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const bucketName = process.env.BUCKET_NAME;
    const uploadResult = await this.s3Service.uploadFile(file, bucketName);
    return {
      message: 'File uploaded successfully',
      data: uploadResult,
    };
  }
}
