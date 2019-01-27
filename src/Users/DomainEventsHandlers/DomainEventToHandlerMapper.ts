
import { DomainEventHandlerBase } from './DomainEventHandlerBase';
import { UserCreatedEventHandler } from './UserCreatedEventHandler';
import { UserAdressChangedEventHandler } from './UserAdressChangedEventHandler';
import { DomainEventsTypes } from '../DomainEvents/DomainEventsTypes';

export const EventToHandlerMapper = new Map<DomainEventsTypes, DomainEventHandlerBase>();

EventToHandlerMapper.set(DomainEventsTypes.UserCreatedEvent, new UserCreatedEventHandler());
EventToHandlerMapper.set(DomainEventsTypes.UserAddressChangedEvent, new UserAdressChangedEventHandler());