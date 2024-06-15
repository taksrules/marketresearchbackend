import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";


@CustomRepository(Task)
export class TaskRepository extends Repository<Task>{

}