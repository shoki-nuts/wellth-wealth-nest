import { Inject, Injectable } from "@nestjs/common"
import { User } from "src/domain/models/user.entity"
import { UserRepository } from "src/repositories/user.repository"
import { PostUserDto, UpdateUserDto } from "src/dtos/user.dto"

@Injectable()
export class usersInteractor {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository
    ){}

    async getUsers(): Promise<User[]>{
        return await this.userRepository.getAll()
    }

    async postUser(userDto: PostUserDto){
        await this.userRepository.create(userDto)
    }

    async updateUser(userDto: UpdateUserDto){
        await this.userRepository.update(userDto)
    }

    async deleteUser(id: number){
        await this.userRepository.delete(id)
    }
}