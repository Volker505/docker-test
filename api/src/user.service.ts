import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './data-base-user/user.schema';
import {Model} from 'mongoose';
import {UserDto} from './data-base-user/user.dto';

export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    public async createUser(userCreate: UserDto) {
        const newUser = new this.userModel(userCreate)

        return newUser.save();
    }

    public async getUserName(): Promise<string> {
        const user = await this.userModel.findOne();

        return `${user.name}_${Math.floor(Math.random() * 100)}`;
    }

    public async getAllUser(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
}