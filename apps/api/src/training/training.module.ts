import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { GameElementsModule } from '../game-elements/game-elements.module';
import { BallPositionEntity } from './entities/ball-position.entity';
import { DrillEntity } from './entities/drill.entity';
import { TrainingTagEntity } from './entities/training-tag.entity';
import { DrillStatisticsEntity } from './entities/drill-statistics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BallPositionEntity,
      DrillEntity,
      DrillStatisticsEntity,
      TrainingTagEntity,
    ]),
    GameElementsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class TrainingModule {}
