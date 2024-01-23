import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRandomData(): { timestamp: string; randomWords: string } {
    return this.appService.getRandomData();
  }

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
