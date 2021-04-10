import { Entity, Index, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public name!: string;

  @Column()
  @Index({ unique: true })
  public normalizedEmail!: string;

  @Column()
  public displayedEmail!: string;

  @Column()
  public passwordHash!: string;
}
