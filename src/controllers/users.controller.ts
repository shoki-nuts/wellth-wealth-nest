import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { usersInteractor } from 'src/usecases/users.interactor';
import { User } from 'src/domain/models/user.entity';
import { PostUserDto } from '../dtos/user.dto';

@Controller('user')
export class UsersController {
    constructor(
        @Inject(usersInteractor)
        private readonly userInteractor: usersInteractor
    ){}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userInteractor.getUsers();
    }

    @Post()
    async postUser(@Body() userDto: PostUserDto) {
        await this.userInteractor.postUser(userDto);
    }
}
