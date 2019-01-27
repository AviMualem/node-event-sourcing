import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class ChangeUserAddressRequest {

  @ApiModelProperty({required : true})
  @IsString()
  readonly address: string;

}