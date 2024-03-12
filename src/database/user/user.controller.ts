import { Body, Controller,Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get()
    getAll(){
        return this.userService.getAll()
    }

    @Post()
    addUser(@Body() body:SignUpDto){
        return this.userService.addUser(body)
    }
}
