import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BallEntity } from '../../game-elements';
import { DrillEntity } from './drill.entity';

@Entity()
export class BallPositionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BallEntity)
  ball: BallEntity;

  @ManyToOne(() => DrillEntity, (drill) => drill.ballPositions)
  drill: DrillEntity;

  @Column()
  gridHeight: number;

  @Column()
  gridWidth: number;

  @Column()
  positionX: number;

  @Column()
  positionY: number;
}
