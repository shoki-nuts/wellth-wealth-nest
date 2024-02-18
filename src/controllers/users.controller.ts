import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { usersInteractor } from 'src/usecases/users.interactor';
import { User } from 'src/domain/models/user.entity';
import { PostUserDto, UpdateUserDto } from '../dtos/user.dto';

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

    @Put()
    async putUser(@Body() userDto: UpdateUserDto) {
        await this.userInteractor.updateUser(userDto);
    }

    @Delete()
    async deleteUser(@Body() id: number) {
        await this.userInteractor.deleteUser(id);
    }
}
