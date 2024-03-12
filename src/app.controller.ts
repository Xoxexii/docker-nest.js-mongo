import { Body, Controller, Get, Post, Req,Res,Session } from '@nestjs/common';
import { AppService } from './app.service';
import { Request,Response } from 'express';
import session from 'express-session';
import { create } from 'domain';
import { UserService } from './database/user/user.service';


@Controller('')
export class AppController {
  constructor(private readonly appService: AppService , private readonly userService: UserService) {}

  
  @Get()
  getAll(){
        return this.userService.getAll();
    }
}
