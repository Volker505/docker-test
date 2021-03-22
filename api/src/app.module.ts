import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {db} from './configuration';
import {UserService} from './user.service';
import {User, UserSchema} from './data-base-user/user.schema';

@Module({
    imports: [
        MongooseModule.forRoot(db),
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
    ],
    controllers: [AppController],
    providers: [
        AppService,
        UserService
    ]
})
export class AppModule {
}
