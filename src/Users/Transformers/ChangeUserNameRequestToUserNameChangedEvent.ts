// import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
// import { UserAddressChangedEvent } from '../DomainEvents/UserAddressChangedEvent';
// import { ChangeUserAddressRequest } from '../DTO/ChangeUserAddressRequest';
// import { ChangeUserNameRequest } from '../DTO/ChangeUserNameRequest';
// import { UserNameChangedEvent } from '../DomainEvents/UserNameChangedEvent';

// @Injectable()
// export class ChangeUserNameRequestToUserNameChangedEvent implements PipeTransform<ChangeUserNameRequest, UserNameChangedEvent> {
//   transform(value: ChangeUserNameRequest, metadata: ArgumentMetadata): UserNameChangedEvent {

//     const a = new UserNameChangedEvent(value.name);
//     return a;
//   }
// }