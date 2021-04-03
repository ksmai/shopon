import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountsController } from './accounts.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'admin',
      autoLoadEntities: true,
    }),
  ],
  controllers: [AccountsController],
  providers: [],
  exports: [],
})
export class AccountsApplicationModule {}
