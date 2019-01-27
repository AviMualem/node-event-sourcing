import { Module } from '@nestjs/common';
import { UsersModule } from './Users/Module/UsersModule';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
