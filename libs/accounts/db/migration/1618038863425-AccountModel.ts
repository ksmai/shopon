import {MigrationInterface, QueryRunner} from "typeorm";

export class AccountModel1618038863425 implements MigrationInterface {
    name = 'AccountModel1618038863425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "name" character varying NOT NULL, "normalizedEmail" character varying NOT NULL, "displayedEmail" character varying NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_56e73c34053e01d349c1ad65ce" ON "account" ("normalizedEmail") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_56e73c34053e01d349c1ad65ce"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
