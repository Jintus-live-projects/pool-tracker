import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, primary: true })
  userId: number;
}
