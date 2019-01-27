import * as mongoose from 'mongoose';
import { UserDomainEventDbModel, UserDomainEvent } from './UserDomainEvent';
import { DomainEventsTypes } from './DomainEventsTypes';

export interface UserNameChangedEvent extends UserDomainEvent
{
  name: string ;
}

const userNameChangedEventSchema = new mongoose.Schema({
  name: String,
});

export const UserNameChangedEventDbModer = UserDomainEventDbModel.discriminator<UserNameChangedEvent>
(DomainEventsTypes.UserNameChangedEvent, userNameChangedEventSchema);
