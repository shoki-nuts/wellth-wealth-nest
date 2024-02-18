import { Inject, Injectable } from "@nestjs/common"
import { constants } from "buffer"
import { User } from "src/domain/models/user.entity"
import { UserRepository } from "src/infrastructure/repositories/userRepository"
import { getUserDto } from "src/interfase/dtos/user.dto"

@Injectable()
export class usersInteractor {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository
    ){}

    async getUsers(): Promise<User[]>{
        return this.userRepository.findAll();
    }
}