import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Get()
  async getRandomData(): Promise<{
    version: number;
    timestamp: string;
    randomWords: string;
  }> {
    return await this.appService.getRandomData();
  }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
