import { Module } from '@nestjs/common';
import { Base } from './base.service';
import { BaseController } from './base.control';

@Module({})
export class BaseModule {
  controller: [BaseController];
  providers: [Base];
}
