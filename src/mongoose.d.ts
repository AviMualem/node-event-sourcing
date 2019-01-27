import { EventEmitter } from 'events';
import { MongoCallback } from 'mongodb';




  




declare module "mongoose" {
    export interface  ClientSession extends EventEmitter {
      // @ts-ignore
      endSession(callback?:MongoCallback): void;
      // @ts-ignore
      
      endSession(options: any, callback?: MongoCallback): void;
      equals(session: ClientSession): boolean;
      startTransaction(): Promise<void>;
      commitTransaction(): Promise<void>;
      abortTransaction(): Promise<void>;
    }
    export interface Connection {
      startSession(): Promise<ClientSession>;
    }
  }
