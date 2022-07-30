import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private user: UserService) {}
  @Post('info')
  signup() {
    return 'hello world';
  }
}
