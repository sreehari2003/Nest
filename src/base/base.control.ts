import { Controller, Get } from '@nestjs/common';
import { Base } from './base.service';

@Controller('')
export class BaseController {
  constructor(private func: Base) {}
  @Get('')
  Reply() {
    return this.func.runnable();
  }
}
