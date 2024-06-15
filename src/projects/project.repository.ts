import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { Project } from "./entities/project.entity";
import { Repository } from "typeorm";

@CustomRepository(Project)
export class ProjectRepository extends Repository<Project>{

}