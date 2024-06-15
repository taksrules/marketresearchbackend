import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'taks1998',
    database: 'project',
    entities: [Project, Task],
    synchronize: true,
  }),
    AuthModule, ProjectsModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
