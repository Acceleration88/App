import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // делает ConfigModule глобальным, чтобы не импортировать в другие модули
      envFilePath: '.env', // путь к файлу с переменными окружения (по умолчанию .env)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
