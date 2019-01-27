// import { EventData, EventStoreNodeConnection, WriteResult } from 'node-eventstore-client';
// const esClient = require('node-eventstore-client');
// import { User } from '../Users/Aggregates/User';
// import { UserCreatedEvent } from '../Users/DomainEvents/UserCreatedEvent';
// import { UserCreatedEventHandler } from '../Users/DomainEventsHandlers/UserCreatedEventHandler';
// import { UserNameChangedEvent } from '../Users/DomainEvents/UserNameChangedEvent';
// import { UserNameChangedEventHandler } from '../Users/DomainEventsHandlers/UserNameChangedEventHandler';
// import { UserAddressChangedEvent } from '../Users/DomainEvents/UserAddressChangedEvent';
// import { UserAdressChangedEventHandler } from '../Users/DomainEventsHandlers/UserAdressChangedEventHandler';
// import {v4} from 'uuid';
//
// export class EventInfo
// {
//    public EventType: string;
//    public DataInJsonFormat: JSON;
//     constructor(eventType: string, json: JSON)
//     {
//         this.EventType = eventType;
//         this.DataInJsonFormat = json;
//     }
//
// }
//
// export class EventStoreClient
// {
//     _isConnected: boolean;
//     private _esConnection: EventStoreNodeConnection;
//
//     private async CreateConnection(): Promise<EventStoreNodeConnection>
//     {
//         const connSettings = {};  // Use defaults
//         const esConnection = esClient.createConnection(connSettings, 'tcp://localhost:1113');
//         await esConnection.connect();
//         this._isConnected = true;
//         this._esConnection  = esConnection;
//         return esConnection;
//     }
//
//     private async GetConnection(): Promise<EventStoreNodeConnection>
//     {
//        if (!this._isConnected)
//        {
//            const connection = await this.CreateConnection();
//            return connection;
//        }
//
//        else
//        {
//            return this._esConnection;
//        }
//     }
//
//     public CreateEventData(eventData, eventName): EventData
//     {
//         const eventId = v4();
//         try
//         {
//           return esClient.createJsonEventData(eventId, eventData, null, eventName);
//
//         }
//
//         catch (e) {
//           throw e;
//         }
//     }
//
//     public async  AddEventToStreamAsync(streamName, event: EventData): Promise<WriteResult>
//     {
//         const connection = await this.GetConnection();
//
//         try
//         {
//             const writeResult = await connection.appendToStream(streamName, esClient.expectedVersion.any, event);
//             return writeResult;
//         }
//
//         catch (e)
//         {
//             console.log(e);
//         }
//     }
//
//     public async ReadStreamEventsAsync(streamName: string, userId: string): Promise<User>
//     {
//         const connection = await this.GetConnection();
//
//         try
//         {
//             const writeResult = await connection.readStreamEventsForward(streamName, 0, 4095);
//
//            // var results =  new Array()
//             let user: User;
//             writeResult.events.forEach(result => {
//             const eventType = result.event.eventType;
//
//             switch (eventType)
//             {
//                 case (UserCreatedEvent.name):
//                     const userCreatedEventDocument: UserCreatedEvent = JSON.parse(result.event.data.toString());
//                     user = new UserCreatedEventHandler().InvokeHandler(userCreatedEventDocument,userId);
//                     break;
//
//                 case (UserNameChangedEvent.name):
//                     const userNameChangedEvent: UserNameChangedEvent = JSON.parse(result.event.data.toString());
//                     new UserNameChangedEventHandler().InvokeHandler(userNameChangedEvent, user);
//                     break;
//
//                 case(UserAddressChangedEvent.name):
//                     const userAddressChangedEvnet: UserAddressChangedEvent = JSON.parse(result.event.data.toString());
//                     new UserAdressChangedEventHandler().InvokeHandler(userAddressChangedEvnet, user);
//                     break;
//             }
//
//             });
//
//             return user;
//
//         }
//         catch (e)
//         {
//             console.log(e);
//             throw e;
//         }
//     }
// }
