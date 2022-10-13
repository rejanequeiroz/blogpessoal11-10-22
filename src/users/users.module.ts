import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...UsersProviders,
    UsersService]
})
export class UsersModule {}
