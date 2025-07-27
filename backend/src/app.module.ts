import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BbbModule } from './bbb/bbb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // делает ConfigModule глобальным, чтобы не импортировать в другие модули
      envFilePath: '.env', // путь к файлу с переменными окружения (по умолчанию .env)
    }),
    BbbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
