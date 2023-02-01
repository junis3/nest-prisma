import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }

  @Get('config/:arg')
  testConfig(@Param('arg') arg: string): string {
    return this.appService.testConfig(arg);
  }
}
