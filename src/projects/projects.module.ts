import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from 'src/database/typeorm-ex.module';
import { ProjectRepository } from './project.repository';

@Module({
  imports:[TypeOrmModule.forCustomRepository([ProjectRepository])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
