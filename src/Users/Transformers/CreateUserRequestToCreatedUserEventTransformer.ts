// import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus, BadRequestException } from '@nestjs/common';
// import { CreateNewUserRequest } from '../DTO/CreateNewUserRequest';
// import { UserCreatedEvent } from '@DomainEvents/UserCreatedEvent111';

// @Injectable()
// export class CreateUserRequestToCreatedUserEventTransformer implements PipeTransform<CreateNewUserRequest, UserCreatedEvent> {
//   transform(value: CreateNewUserRequest, metadata: ArgumentMetadata): UserCreatedEvent {

//     const a = new UserCreatedEvent();
//     a.address = value.address;
//     a.name = value.name
//     return a;
//   }
// }