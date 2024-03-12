import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument } from './user.schema';
import { SignUpDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}


    async getAll():Promise<User[]>{
        return this.userModel.find().exec()
    }

    async addUser(body:SignUpDto):Promise<User>{
        const model = new this.userModel(body)
        return model.save()
    }
}
