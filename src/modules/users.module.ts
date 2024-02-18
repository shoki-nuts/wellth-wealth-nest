import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersInteractor } from 'src/usecases/users.interactor';
import { User } from 'src/domain/models/user.entity';
import { UserRepository } from 'src/repositories/userRepository';
import { UsersController } from 'src/controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, usersInteractor],
  controllers: [UsersController],
})
export class UsersModule {}
