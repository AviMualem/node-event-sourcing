import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class ChangeUserNameRequest {

  @ApiModelProperty({required : true})
  @IsString()
  readonly name: string;

}