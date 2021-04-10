import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  PrimaryColumn,
} from 'typeorm';

export class Model {
  @PrimaryColumn()
  public id!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @DeleteDateColumn()
  public deletedAt!: Date | null;

  @VersionColumn()
  public version!: number;
}
