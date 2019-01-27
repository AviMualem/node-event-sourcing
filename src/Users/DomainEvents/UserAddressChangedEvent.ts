import { prop, Typegoose } from 'typegoose';

export class UserAddressChangedEvent  extends Typegoose
{

  @prop({ required: true })
  address: string;

  constructor(address: string) {
    super();

    this.address = address;
  }
}