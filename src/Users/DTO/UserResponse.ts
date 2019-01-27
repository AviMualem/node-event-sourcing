export class UserResponse {

  userid: string;
  name: string;
  address: string;

  constructor(id: string, name: string, address: string)
  {
    this.userid = id;
    this.name = name;
    this.address = address;
  }
}