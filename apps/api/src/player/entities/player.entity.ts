import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  pseudo: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => PlayerEntity, player => player.friends)
  @JoinTable()
  friends: PlayerEntity[];
}
