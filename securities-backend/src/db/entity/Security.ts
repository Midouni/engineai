import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Security {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ unique: true })
  ticker!: string;

  @Column()
  securityName!: string;

  @Column()
  sector!: string;

  @Column()
  country!: string;

  @Column("float")
  trend!: number;

  @Column("jsonb")
  prices!: Array<{ date: string; close: string; volume: string }>; // Store price history as a JSONB column
}
