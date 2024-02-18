import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';
import { User } from './domain/models/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "welth-wealth",
      password: "welth-wealth",
      database: "postgres",
      entities:  [User],
      synchronize: true,
    }
  ), 
  UsersModule,],
})

export class AppModule {}
