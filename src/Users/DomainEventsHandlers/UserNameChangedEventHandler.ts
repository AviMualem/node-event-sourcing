import { UserAggregate } from '../Aggregates/User';
import { UserNameChangedEvent } from '../DomainEvents/UserNameChangedEvent';

export class UserNameChangedEventHandler
{
    public InvokeHandler(event: UserNameChangedEvent, user: UserAggregate)
    {
        user.name = event.name;
        return user;
    }
}