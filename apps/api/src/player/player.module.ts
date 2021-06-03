import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entities/player.entity';
import { PlayerService } from './services/player.service';
import { PlayersController } from './controllers/players.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    PlayerService],
  controllers: [PlayersController]
})
export class PlayerModule {
}
