import { UserDomainEvent } from '../DomainEvents/UserDomainEvent';
import { UserAggregate } from '../Aggregates/User';

export abstract class DomainEventHandlerBase
 {
    abstract InvokeHandler(event: UserDomainEvent, user: UserAggregate);
}