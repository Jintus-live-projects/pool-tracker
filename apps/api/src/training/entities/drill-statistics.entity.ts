import {
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DrillEntity } from './drill.entity';
import { BallPositionEntity } from './ball-position.entity';

@Entity()
export class DrillStatisticsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DrillEntity)
  drill: DrillEntity;

  @ManyToMany(() => BallPositionEntity)
  missedShots: BallPositionEntity[];

  @ManyToMany(() => BallPositionEntity)
  succeededShots: BallPositionEntity[];

  @CreateDateColumn()
  date: Date;
}
