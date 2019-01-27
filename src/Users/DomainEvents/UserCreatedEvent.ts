import * as mongoose from 'mongoose';
import { UserDomainEventDbModel, UserDomainEvent } from './UserDomainEvent';
import { DomainEventsTypes } from './DomainEventsTypes';

export interface UserCreatedEvent extends UserDomainEvent
{
  name: string ;
  address: string ;
}

const userCreatedEventSchema = new mongoose.Schema({
  name: String,
  address: String,
});

export const UserCreatedEventDbModel = UserDomainEventDbModel.discriminator<UserCreatedEvent>
(DomainEventsTypes.UserCreatedEvent, userCreatedEventSchema );