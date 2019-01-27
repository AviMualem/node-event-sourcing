import { Post, Controller, UsePipes, Inject, Body, Param, ConflictException } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ValidationPipe } from '../Validators/ValidationPipe';
import {Connection} from 'mongoose';
import { CreateNewUserRequest } from '../DTO/CreateNewUserRequest';
import { ChangeUserAddressRequest } from '../DTO/ChangeUserAddressRequest';
import { UserAggregate } from '../Aggregates/User';
import { EventToHandlerMapper } from '../DomainEventsHandlers/DomainEventToHandlerMapper';
import { UserAggregateVersionDbModel, UserDomainEventDbModel } from '../DomainEvents/UserDomainEvent';
import { UserCreatedEventDbModel } from '../DomainEvents/UserCreatedEvent';
import { UserAddressChangedEventDbModel } from '../DomainEvents/UserAdressChangedEvent';

// tslint:disable-next-line:no-var-requires
const uuidv4 = require('uuid/v4');

@Controller('Users')
@ApiUseTags('users')
export class UserController
{
  connection: Connection  ;
  constructor(@Inject('mongo')private readonly mongo: Connection) {
    this.connection = mongo;
  }

  @Post('/CreateUser')
  @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
  @UsePipes(ValidationPipe)
 // @UsePipes(new JoiValidationPipe(new CreateNewUserRequest()))
  async createUserAsync(): Promise<string>  {
    const mongoDbConnection = this.connection;
    await UserAggregateVersionDbModel.create([{aggreagteId: 'xxx', version: '0'}]);
    const session = await mongoDbConnection.startSession();
    try
    {
      await session.startTransaction();
      // @ts-ignore due to the fact that mongoose type needs to cover the mongo session object.
      const k = await UserAggregateVersionDbModel.findOneAndUpdate({aggreagteId: 'xxx', version: '0' }, { $set: { version: '1'} }).session(session);
      await UserCreatedEventDbModel.create([{ aggregateId: 'xxx', version: '1', name: 'avi', address: 'netany a' }] , { session });
      await session.commitTransaction();
    }
    catch (e)
    {
      await session.abortTransaction();
    }

    return 'ok';

  }

  @Post('/CreateUserWithNoTransaction')
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @UsePipes(ValidationPipe)
 // @UsePipes(new JoiValidationPipe(new CreateNewUserRequest()))

  // tslint:disable-next-line:max-line-length
  async CreateUserWithoutTransactionAsync(@Body() request: CreateNewUserRequest): Promise<string>
  {
    const aggregateIdentifier = uuidv4();
    try
    {
     // const verifyRevisionNumberExist = await UserAggregateVersionDbModel.findOne({'aggreagteId': 'xxx', 'version': '0'}, 'version');
      await UserCreatedEventDbModel.create([{ aggregateId: aggregateIdentifier, version: 0, name: request.name, address: request.address }]);
    }
    catch (e)
    {
      // log
      const a = e;
    }

    return 'New user created with id: ' + aggregateIdentifier;
  }

  @Post(':id/:version/UpdateUserAddressWithoutTransaction')
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @UsePipes(ValidationPipe)
 // @UsePipes(new JoiValidationPipe(new CreateNewUserRequest()))

  // tslint:disable-next-line:max-line-length
  async updateUserAddressWithoutTransactionAsync(@Body() request: ChangeUserAddressRequest, @Param('id') id: string, @Param('version') version: string): Promise<string>{
    const newVersionInt = parseInt(version, 10) + 1;
    const verifyRevisionNumberExist = await UserDomainEventDbModel.findOne(
                                            { version, aggregateId: id }, 'version');
    if (verifyRevisionNumberExist === null) {
      throw new ConflictException('Revision number wasnt found');
    }
    try
    {
      await UserAddressChangedEventDbModel.create(
        [{ aggregateId: id, version: newVersionInt, address: request.address }]);
    }
    catch (e) {
      throw new ConflictException('desired version number already taken');
    }
    return 'New user address changed event was inserted for aggregateid: ' + id;
  }
  @Post(':id')
  @UsePipes(ValidationPipe)
  async GetUserByIdAsync(@Param('id') id: string): Promise<UserAggregate> {
    const events = await UserDomainEventDbModel.find({ aggregateId: id })
    .sort([['version', 1]]).exec();

    const userAggregate = new UserAggregate();
    events.forEach(e => {
      if (EventToHandlerMapper.has(e.kind))
      {
        EventToHandlerMapper.get(e.kind).InvokeHandler(e, userAggregate);
      }
      else
      {
          // missing type.
      }

    });

    return userAggregate;
  }

}
