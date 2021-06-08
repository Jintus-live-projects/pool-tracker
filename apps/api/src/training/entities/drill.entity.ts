import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BallPositionEntity } from './ball-position.entity';
import { TrainingTagEntity } from './training-tag.entity';

@Entity()
export class DrillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => BallPositionEntity, (ballPosition) => ballPosition.drill)
  ballPositions: BallPositionEntity[];

  @Column()
  rules: string;

  @ManyToMany(() => TrainingTagEntity)
  trainingTags: TrainingTagEntity[];
}
