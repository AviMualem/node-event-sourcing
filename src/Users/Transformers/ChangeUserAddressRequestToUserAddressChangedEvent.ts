// import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
// import { UserAddressChangedEvent } from '../DomainEvents/UserAddressChangedEvent';
// import { ChangeUserAddressRequest } from '../DTO/ChangeUserAddressRequest';

// @Injectable()
// export class ChangeUserAddressRequestToUserAddressChangedEvent implements PipeTransform<ChangeUserAddressRequest, UserAddressChangedEvent> {
//   transform(value: ChangeUserAddressRequest, metadata: ArgumentMetadata): UserAddressChangedEvent {

//     const a = new UserAddressChangedEvent(value.address);
//     return a;
//   }
// }