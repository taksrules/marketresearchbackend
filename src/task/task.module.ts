import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from 'src/database/typeorm-ex.module';
import { TaskRepository } from './task.repository';

@Module({
  imports:[TypeOrmModule.forCustomRepository([TaskRepository])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
