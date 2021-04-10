import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account as AccountModel } from './account.model';
import { AccountsRepository } from './accounts.repository';

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
      synchronize: false,
    }),
    TypeOrmModule.forFeature([AccountModel]),
  ],
  providers: [AccountsRepository],
  exports: [AccountsRepository],
})
export class AccountsDbModule {}
