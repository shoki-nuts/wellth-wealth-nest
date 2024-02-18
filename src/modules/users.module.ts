import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersInteractor } from 'src/application/usecases/users.interactor';
import { User } from 'src/domain/models/user.entity';
import { UserRepository } from 'src/infrastructure/repositories/userRepository';
import { UsersController } from 'src/interfase/controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, usersInteractor],
  controllers: [UsersController],
})
export class UsersModule {}
