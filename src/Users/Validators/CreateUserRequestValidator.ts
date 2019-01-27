import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { CreateNewUserRequest } from '../DTO/CreateNewUserRequest';

@Injectable()
export class CreateUserRequestValidator implements PipeTransform<CreateNewUserRequest> {
  async transform(value: CreateNewUserRequest , { metatype }: ArgumentMetadata) {

    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}