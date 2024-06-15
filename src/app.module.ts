import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';
import { Task } from './task/entities/task.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports:[ConfigModule.forRoot({isGlobal:true})],
    inject:[ConfigService],
    useFactory:async (configService:ConfigService)=>({
      type:"postgres",
      host:configService.get('DB_HOST'),
      port: configService.get("DB_PORT"),
      username: configService.get("DB_USER"),
      password: configService.get("DB_PASSWORD"),
      database: configService.get("DB_NAME"),
      entities: [__dirname + '/../**/*.entity.{.js,.ts}',Project,Task],

      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    })
  }),
    AuthModule, ProjectsModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
