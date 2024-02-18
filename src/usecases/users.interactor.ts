import { Inject, Injectable } from "@nestjs/common"
import { User } from "src/domain/models/user.entity"
import { UserRepository } from "src/repositories/userRepository"
import { PostUserDto } from "src/dtos/user.dto"

@Injectable()
export class usersInteractor {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository
    ){}

    async getUsers(): Promise<User[]>{
        return await this.userRepository.findAll()
    }

    async postUser(userDto: PostUserDto){
        await this.userRepository.create(userDto)
    }
}