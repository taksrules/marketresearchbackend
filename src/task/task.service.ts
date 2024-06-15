import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { TaskRepository } from './task.repository';


@Injectable()
export class TaskService{
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
    ) {}

    create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll() : Promise<Task[]> {
    return this.taskRepository.find();
    }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  findAllByProjectId(projectId: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: {
        project: {
          id: projectId,
        },
      },
      relations: ['project'],
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {

    const update = await this.taskRepository.update(id, updateTaskDto);
    return update;
  }

  async remove(id: number) {
    const deletion = await this.taskRepository.delete(id);
    return deletion
  }
}


