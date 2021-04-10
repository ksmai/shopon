import { Module } from '@nestjs/common';

import { AccountsDomainModule } from '@shopon/accounts/domain';
import { AccountsDbModule } from '@shopon/accounts/db';
import { AccountsController } from './accounts.controller';

@Module({
  imports: [AccountsDomainModule, AccountsDbModule],
  controllers: [AccountsController],
})
export class AccountsApplicationModule {}
