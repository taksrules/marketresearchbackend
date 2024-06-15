import { IsString, IsNotEmpty, IsDate, IsOptional, IsArray, ArrayMinSize} from '@nestjs/class-validator';

import { ApiProperty } from "@nestjs/swagger";
export class UpdateStatusProjectDto {


  @IsString()
  @IsNotEmpty()
  @ApiProperty({type:String, description:'text'})
  status: string;

 
}