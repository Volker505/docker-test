import {Controller, Get, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {UserService} from './user.service';
import {User} from './data-base-user/user.schema';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService
    ) {
    }

    @Get('content-hello')
    public getHello(): string {
        return this.appService.getHello();
    }

    @Get('user')
    public async getUser(): Promise<string> {
        await this.userService.createUser({name: 'max', age: 27});

        return await this.userService.getUserName();
    }

    @Get('all-user')
    public async getAllUser(): Promise<User[]> {
        return await this.userService.getAllUser();
    }
}
