// entities/project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string; // Planning, In Progress, Completed

  @Column()
  dueDate: Date;

  @Column('text', {nullable: true})
  notes: string;

  @Column('simple-array', {nullable: true})
  researchFindings: string[];

  @Column('simple-array', { nullable: true })
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}

