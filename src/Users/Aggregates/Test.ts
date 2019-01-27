// import { Model, Document } from 'mongoose';
//
// export interface Transport {
//   __t: keyof TransportDiscriminatorTypeMap;
//   name: string;
// }
//
// export interface Car extends Transport {
//   wheels: number;
//   maxSpeed: number;
// }
//
// export interface Train extends Transport {
//   capacity: number;
//   electric: boolean;
//   underground: boolean;
// }
//
// export interface Airplane extends Transport {
//   maxSpeed: number;
//   capacity: number;
//   jet: boolean;
// }
//
// export interface TransportDiscriminatorTypeMap {
//   Car: Car;
//   Train: Train;
//   Airplane: Airplane;
// }
//
// export type Transports = Car | Train | Airplane;
// export type TransportsModel = Model<Transports & Document>;
//
// const commandInvokerMap = new Map<keyof TransportDiscriminatorTypeMap, CommandInvoker<any>>();
// class CommandInvoker<T extends keyof TransportDiscriminatorTypeMap> {
//   applyCommand(instance: TransportDiscriminatorTypeMap[T]): void {
//
//   }
//   static get<T extends keyof TransportDiscriminatorTypeMap>(key: T): CommandInvoker<T> {
//     return commandInvokerMap.get(key);
//   }
// }
//
// const car: Car = null;
// const train: Train = null;
//
// CommandInvoker.get('Train').applyCommand(car);
// CommandInvoker.get('Train').applyCommand(train);