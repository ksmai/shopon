import { Controller, Get, Post, Patch, Body } from '@nestjs/common';
import { Connection } from 'typeorm';

import { AccountResponse } from './account-response.interface';
import { CreateAccountDto } from './create-account-dto.interface';
import { UpdateAccountDto } from './update-account-dto.interface';

import { Account } from '@shopon/accounts/domain';
import { AccountsRepository } from '@shopon/accounts/db';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';

@Controller('accounts')
export class AccountsController {
  public constructor(
    private readonly repository: AccountsRepository,
    private readonly connection: Connection
  ) {}

  @Get()
  public async getCurrentAccount(): Promise<AccountResponse> {
    return { account: { id: 'test-id', name: 'test', email: 'test@test.com' } };
  }

  @Post()
  public async createAccount(
    @Body() payload: CreateAccountDto
  ): Promise<AccountResponse> {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const account = await pipe(
        Account.create({
          ...payload,
          hashedPassword: 'fakeHash',
        }),
        TE.fromEither,
        TE.chainW(
          this.repository.save.bind(this.repository, queryRunner.manager)
        )
      )();
      console.log(account);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return {
      account: { id: 'test-id', name: payload.name, email: payload.email },
    };
  }

  @Patch()
  public async updateAccount(
    @Body() payload: UpdateAccountDto
  ): Promise<AccountResponse> {
    return { account: { id: 'test-id', name: '', email: '' } };
  }
}
