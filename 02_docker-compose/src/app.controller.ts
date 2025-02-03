import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
