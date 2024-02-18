import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/models/user.entity";
import { PostUserDto, UpdateUserDto } from "src/dtos/user.dto";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor (
        @InjectRepository(User)
        private userRepository : Repository<User>
    ) {}

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(userDto: PostUserDto) {
        await this.userRepository.save(userDto)
    }

    async update(userDto: UpdateUserDto) {
        await this.userRepository.update(userDto.id, userDto);
    }

    async delete(id: number) {
        await this.userRepository.delete(id);
    }
}