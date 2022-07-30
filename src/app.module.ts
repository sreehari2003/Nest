import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AuthModule, PrismaModule, UserModule],
})
export class AppModule {}
