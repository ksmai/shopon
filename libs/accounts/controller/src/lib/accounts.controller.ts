import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get()
  ___testGetAccounts() {
    return { test: 'accounts works' };
  }
}
