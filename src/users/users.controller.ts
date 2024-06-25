import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'John Doe' }, { id: 2, name: 'David Nakamura' }];
  }
}
