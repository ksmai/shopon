import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';

@Module({
  controllers: [AccountsController],
  providers: [],
  exports: [],
})
export class AccountsModule {}
