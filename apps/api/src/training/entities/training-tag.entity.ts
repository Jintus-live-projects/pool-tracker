import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TrainingTagEntity {
  @PrimaryColumn({ unique: true })
  name: string;
}
