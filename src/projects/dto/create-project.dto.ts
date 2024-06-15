import { IsString, IsNotEmpty, IsDate, IsOptional, IsArray, ArrayMinSize} from '@nestjs/class-validator';

import { ApiProperty } from "@nestjs/swagger";
export class CreateProjectDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String, description:'text'})
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  description: string;

  
  @IsNotEmpty()
  @ApiProperty({type:Date, description:'Date'})
  @IsDate()
  dueDate: Date;

//   @IsOptional()
//   assignedResearchers: string[];
  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  notes: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  status: string;

  @IsArray()
  @ArrayMinSize(1)
  researchFindings: string[];
}