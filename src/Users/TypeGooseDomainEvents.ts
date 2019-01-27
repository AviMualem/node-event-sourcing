// import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
// // import * as mongooseClient from 'mongoose';
// import * as mongoDb from 'mongodb';

// // abstract class UserDomainEventBaseTypeGoose extends Typegoose {
// //   @prop()
// //   aggregateId: string;
// //
// //   protected constructor(aggregateId: string)
// //   {
// //     super();
// //     this.aggregateId = aggregateId;
// //   }
// // }

// interface UserDomainEventBaseTypeGoose
// {
//   aggregateId: string;
//   type: string;

//   ispublished: boolean;

// }
// class UserCreatedDomainEventTypeGoose extends Typegoose implements UserDomainEventBaseTypeGoose
// {

//   @prop()
//   ispublished: boolean;

//   @prop()
//   aggregateId: string;

//   @prop()
//   name: string;

//   @prop()
//   address: string;

//   @prop()
//   type: string;

//   constructor()
//   {
//     super();

//   }

//   // constructor(aggregateId: string, name: string, address: string)
//   // {
//   //   super();
//   //   this.type ='UserCreatedEvent'
//   //   this.aggregateId = aggregateId;
//   //   this.name = name;
//   //   this.address = address;
//   // }

// }

// class UserNameChangedDomainEventTypeGoose extends Typegoose implements UserDomainEventBaseTypeGoose
// {

//   @prop()
//   ispublished: boolean;

//   @prop()
//   name: string;

//   @prop()
//   aggregateId: string;

//   @prop()
//   type: string;

//   constructor()
//   {
//     super();
//   }

// }

// class AggtegateVersion extends Typegoose
// {

//   @prop()
//   aggregateId: string;

//   @prop()
//   version: string;

//   constructor()
//   {
//     super();
//   }

// }

// const aggregateVersionModel = new AggtegateVersion().getModelForClass(AggtegateVersion);

// const UserNameChangedEventModel = new UserNameChangedDomainEventTypeGoose().getModelForClass(UserNameChangedDomainEventTypeGoose);

// const UserCreatedEventModel = new UserCreatedDomainEventTypeGoose().getModelForClass(UserCreatedDomainEventTypeGoose);
// // UserModel is a regular Mongoose Model with correct types
// (async () => {
//   // const db = require('mongoose');
//   // const mongo = require('mongodb');

//   const uri = 'mongodb://localhost:37017,localhost:37018,localhost:37019/avitests?replicaSet=rs0';
//   //const connection = await mongooseClient.connect(uri);
//  //const mongoConnecion = await mongoose.connect(uri);
//   // const conneciton = await mongoDb.connect(uri);
//   // const session  = conneciton.startSession();
//   // conneciton.startTransacion();

//   const  x = require('mongoose');
//   const conn = await x.connect(uri);
//   const session = await conn.startSession();
//   await session.startTransaction();
//   //const tx = await mongoConnecion.start
//   // const opts = {session, new: true };

//   const usercreatedevent = new UserCreatedEventModel({ aggregateId: 'QQQ', name: 'JohnDoe',
//                                                     address: 'ta', type: 'UserCreatedEvent',
//                                                     ispublished: true });
//   //const z = await UserNameChangedEventModel.findOne(opts);
//   // const user = await UserCreatedEventModel.findOne();

//   await session.commitTransaction();
//   session.endSession();

//   // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
//   console.log('g');
// })();