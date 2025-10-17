import { Injectable } from '@nestjs/common';
import { Payload } from 'payload';
import { User } from '../payload-types';
import { InjectPayload } from './payload/inject-payload.decorator';

@Injectable()
export class AppService {
  constructor(@InjectPayload() private readonly payload: Payload) { }

  async getHello(): Promise<User[]> {
    // const users = await this.payload.create({
    //   collection: "users",
    //   data: {
    //     email: "admin@qwerty.com",
    //     password:"qwerty"
    //   }
    // })
    const { docs: users } = await this.payload.find({ collection: "users" })
    return users;
  }
}
