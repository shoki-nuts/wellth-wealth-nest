import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor (
        @InjectRepository(User)
        private userRepository : Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}