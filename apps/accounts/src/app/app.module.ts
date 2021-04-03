import { Module } from '@nestjs/common';

import { AccountsApplicationModule } from '@shopon/accounts/application';

@Module({
  imports: [AccountsApplicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
