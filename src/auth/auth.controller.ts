import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthProp } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthProp) {
    const { name, password } = dto;
    return 'hello world';
  }
}
