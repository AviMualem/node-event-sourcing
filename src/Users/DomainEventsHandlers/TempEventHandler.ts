import { UserAggregate } from '../Aggregates/User';

export class MyEventHandler
{
    InvokeHandler( user: UserAggregate)
     {
         user.address = 'changed';
    }

     Do(): string
     {
         return 'afdsa';
    }
}