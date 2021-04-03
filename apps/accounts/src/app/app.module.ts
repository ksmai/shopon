import { Module } from '@nestjs/common';

import { AccountsModule } from '@shopon/accounts/application';

@Module({
  imports: [AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
