import { Module, Global } from '@nestjs/common';
import { UserController } from '../Controllers/UserController';
import { DatabaseModule } from '../../MongoDb/Module/database.module';
import { TestController } from '../Controllers/TestController';

// @Global()
// @Module({
//   imports: [DatabaseModule],
//   controllers: [UserController, TestController],
//   providers: [],
//   exports: [],
// })
// export class UsersModule {}
@Module({
  imports: [DatabaseModule],
  controllers: [UserController, TestController],
  providers: [],
  exports: [],
})
export class UsersModule {}