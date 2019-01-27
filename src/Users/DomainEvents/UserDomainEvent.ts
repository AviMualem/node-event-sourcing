import * as mongoose from 'mongoose';
import { DomainEventsTypes } from './DomainEventsTypes';

export interface UserDomainEvent extends mongoose.Document
{
    aggregateId: string;
    version: number;
    isPublished: boolean;
    kind: DomainEventsTypes;
    insertedDate: Date;
}

const userDomainEventSchema = new mongoose.Schema({
  aggregateId: {type: String, required: true},
  version: {type: Number, required: true},
  kind: {type: String, required: true},
  isPublished: {type: Boolean, default: false},
  insertedDate: {type: Date, default: new Date().getTime()},
}, { discriminatorKey: 'kind'});

userDomainEventSchema.index({aggregateId: 1, version: 1}, {unique: true, name: 'unique_aggregate2_id'});
export const UserDomainEventDbModel = mongoose.model<UserDomainEvent>('usereventfeed', userDomainEventSchema);

export interface UserAggregateversionNumber extends  mongoose.Document
{
  aggreagteId: string;
  version: string;
}

const userAggregateVersionSchema = new mongoose.Schema({
  aggreagteId: String,
  version: String,
});

userAggregateVersionSchema.index({aggreagteId: 1}, {unique: true, name: 'unique_aggre5gate_id'});
export const UserAggregateVersionDbModel = mongoose.model<UserAggregateversionNumber>('aggregateversion', userAggregateVersionSchema);