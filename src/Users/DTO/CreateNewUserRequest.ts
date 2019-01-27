import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, Length } from 'class-validator';

export class CreateNewUserRequest {

  @ApiModelProperty({required : true, default: 'sad', description: 'this is a name'})
  @ IsString({message: 'This should be here'})
  readonly name: string;

  @ApiModelProperty()
  @IsString({message: 'This should be here too'})
  readonly address: string;

}