import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientUnknownRequestError } from '@prisma/client/runtime';
import argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { AuthProp } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(obj: AuthProp) {
    const hash = await argon.hash(obj.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          hash: hash,
          userName: obj.name,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientUnknownRequestError) {
        throw error;
      }
    }
  }

  async signIn(dto: AuthProp) {
    const user = await this.prisma.user.findUnique({
      where: {
        userName: dto.name,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentails incorrect');
    }

    const pwMatch = await argon.verify(user.hash, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('Credentails incorrect');
    }

    delete user.hash;
    return user;
  }
}
