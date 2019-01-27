import * as mongoose from 'mongoose';

export const connectionProvider = {
  provide: 'mongo',
  useFactory: async () =>
  {
     // const uri = 'mongodb://localhost:37017,localhost:37018,localhost:37019/avitests?replicaSet=rs0';

     const uri = process.env.mongo_connection_string;
     try
    {
      await mongoose.connect(uri);
      const mongoDbConnection = mongoose.connection;
      const coll = await mongoDbConnection.db.listCollections().toArray();
      const aggregateversionsCollection = coll.find(x => x.name === 'aggregateversions');
      const usereventdeedcollection = coll.find(x => x.name === 'usereventfeeds');
      if  (aggregateversionsCollection === undefined)
        {
          await mongoDbConnection.createCollection('aggregateversions');
        }

      if  (usereventdeedcollection === undefined)
        {
          await mongoDbConnection.createCollection('usereventfeeds');
        }
      return mongoDbConnection;
    }
    catch (e)
    {
      // log.
      throw e;
    }
  },
  };
