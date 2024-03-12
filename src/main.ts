import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    credentials: true,
    origin: true
  });
  
  app.use(
    session({
      secret: 'itimengjaa',
      resave: false,
      saveUninitialized: true,
      cookie:{
        maxAge:null
      }
    }),
  );
  
  await app.listen(80);
}
bootstrap();
