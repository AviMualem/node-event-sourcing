import { UserAggregate } from '../Aggregates/User';
import { UserDomainEvent } from '../DomainEvents/UserDomainEvent';
import { DomainEventHandlerBase } from './DomainEventHandlerBase';
import { UserAddressChangedEvent } from '../DomainEvents/UserAdressChangedEvent';

export class UserAdressChangedEventHandler implements DomainEventHandlerBase
{
    InvokeHandler(event: UserDomainEvent, user: UserAggregate)
     {
         const myEvent = event as UserAddressChangedEvent;
         user.address = myEvent.address;
         user.version = myEvent.version;
    }
}