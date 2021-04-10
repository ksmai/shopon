import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { pipe, flow } from 'fp-ts/lib/function';
import { TaskEither } from 'fp-ts/lib/TaskEither';
import * as TE from 'fp-ts/lib/TaskEither';

import { Account } from '@shopon/accounts/domain';
import { Account as AccountModel } from './account.model';
import { SaveAccountError } from './save-account.error';

@Injectable()
export class AccountsRepository {
  public save(
    manager: EntityManager,
    account: Account
  ): TaskEither<SaveAccountError, Account> {
    const model = new AccountModel();
    model.id = account.getId().toString();
    model.name = account.getName().getName();
    model.normalizedEmail = account.getEmail().getNormalized();
    model.displayedEmail = account.getEmail().getDisplayed();
    model.passwordHash = account.getPassword().getHashedPassword();
    return pipe(
      model,
      TE.tryCatchK(
        (a: AccountModel) => manager.save(a),
        flow(String, SaveAccountError.of)
      ),
      TE.map(() => account)
    );
  }
}
