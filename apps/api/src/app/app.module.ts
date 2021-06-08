import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '../core/core.module';
import { PlayerModule } from '../player/player.module';
import { GameElementsModule } from '../game-elements/game-elements.module';
import { TrainingModule } from '../training/training.module';

@Module({
  imports: [CoreModule, PlayerModule, GameElementsModule, TrainingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
