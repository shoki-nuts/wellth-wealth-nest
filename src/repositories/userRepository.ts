import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/models/user.entity";
import { PostUserDto } from "src/dtos/user.dto";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor (
        @InjectRepository(User)
        private userRepository : Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: PostUserDto) {
        await this.userRepository.save(user)
    }
}