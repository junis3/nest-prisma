import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  healthCheck(): string {
    return 'Hello!';
  }

  testConfig(arg: string): any {
    return this.configService.get(arg);
  }
}
