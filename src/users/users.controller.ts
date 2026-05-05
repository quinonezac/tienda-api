import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('sync')
  sync(@Body() body: { firebaseUid: string; email: string; name: string }) {
    return this.usersService.sync(body);
  }
}