import { UserAggregate } from '../Aggregates/User';
import {  UserDomainEvent } from '../DomainEvents/UserDomainEvent';
import { DomainEventHandlerBase } from './DomainEventHandlerBase';
import { UserCreatedEvent } from '../DomainEvents/UserCreatedEvent';

export class UserCreatedEventHandler implements DomainEventHandlerBase
{
    InvokeHandler(event: UserDomainEvent, user: UserAggregate)
    {
        const userCreatedEvent = event as UserCreatedEvent;
        user.address = userCreatedEvent.address;
        user.name = userCreatedEvent.name;
        user.userid = userCreatedEvent.aggregateId;
        user.version = userCreatedEvent.version;
    }
}