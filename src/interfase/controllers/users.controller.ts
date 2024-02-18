import { Controller, Get, Inject } from '@nestjs/common';
import { usersInteractor } from 'src/application/usecases/users.interactor';

@Controller('users')
export class UsersController {
    constructor(
        @Inject(usersInteractor)
        private readonly userInteractor: usersInteractor
    ){}

    @Get()
    async getUsers() {
        return this.userInteractor.getUsers();
    }
}
