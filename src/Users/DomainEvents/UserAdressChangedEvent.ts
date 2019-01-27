import * as mongoose from 'mongoose';
import { UserDomainEventDbModel, UserDomainEvent } from './UserDomainEvent';
import { DomainEventsTypes } from './DomainEventsTypes';

export interface UserAddressChangedEvent extends UserDomainEvent
{
  address: string;
}

const userAdressChangedEventSchema = new mongoose.Schema({
  address: String,
});

export const UserAddressChangedEventDbModel = UserDomainEventDbModel.discriminator<UserAddressChangedEvent>
(DomainEventsTypes.UserAddressChangedEvent,  userAdressChangedEventSchema);
