import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class BallEntity {
  @PrimaryColumn()
  color: string;

  @PrimaryColumn()
  number: number;
}
