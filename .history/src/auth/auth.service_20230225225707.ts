import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { mgs: 'i have signed up' };
  }
}
