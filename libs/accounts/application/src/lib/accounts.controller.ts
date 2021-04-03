import { Controller, Get, Post, Patch, Body } from '@nestjs/common';

import { AccountResponse } from './account-response.interface';
import { CreateAccountDto } from './create-account-dto.interface';
import { UpdateAccountDto } from './update-account-dto.interface';

@Controller('accounts')
export class AccountsController {
  @Get()
  async getCurrentAccount(): Promise<AccountResponse> {
    return { account: { id: 'test-id', name: 'test', email: 'test@test.com' } };
  }

  @Post()
  async createAccount(
    @Body() payload: CreateAccountDto
  ): Promise<AccountResponse> {
    return {
      account: { id: 'test-id', name: payload.name, email: payload.email },
    };
  }

  @Patch()
  async updateAccount(
    @Body() payload: UpdateAccountDto
  ): Promise<AccountResponse> {
    return { account: { id: 'test-id', name: '', email: '' } };
  }
}
