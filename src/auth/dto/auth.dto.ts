import { IsNotEmpty, IsString } from 'class-validator';

export class AuthProp {
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
