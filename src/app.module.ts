import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './websocket/socket.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './database/user/user.module';

@Module({
  imports:[SocketModule,MongooseModule.forRoot('mongodb://root:1234@mongo:27017/Account?authSource=admin'),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
