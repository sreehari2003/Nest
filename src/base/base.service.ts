import { Injectable } from '@nestjs/common';

@Injectable()
export class Base {
  runnable() {
    return {
      ok: true,
      message: 'Server running successfully',
    };
  }
}
