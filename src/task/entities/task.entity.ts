// entities/task.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column('text')
  notes: string;

  @Column({nullable:true})
  assignedResearchers: string ;

  @Column()
  status: string; // To Do, In Progress, Completed

  @ManyToOne(() => Project, (project) => project.id)
  project: Project;
}   


