import { Module } from '@nestjs/common';

import { AccountsModule } from '@shopon/accounts/controller';

@Module({
  imports: [AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
