import { IsString, IsNotEmpty, IsDate, IsOptional, IsArray, ArrayMinSize} from '@nestjs/class-validator';
import { Project } from '../../projects/entities/project.entity';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDto{

    @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  status: string; 

  @IsNotEmpty()
  @ApiProperty({type:Date, description:'Date'})
  @IsDate()
  dueDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  notes: string;

}
