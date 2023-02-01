import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { ExampleModule } from './example/example.module';
import { PrismaModule } from './providers/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), PrismaModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
