import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreatePlayerDto, PlayerDto } from '../dtos/player.dto';
import { PlayerService } from '../services/player.service';
import { catchError, map } from 'rxjs/operators';
import {
  mapPlayerEntitiesToPlayerDtos,
  mapPlayerEntityToPlayerDto,
} from '../helpers/mappers/player.mapper';

@Controller('players')
export class PlayersController {
  constructor(private playerService: PlayerService) {}

  @Post()
  registerPlayer(
    @Body() playerInformations: CreatePlayerDto
  ): Observable<PlayerDto> {
    return this.playerService
      .createPlayerEntity(playerInformations.userId)
      .pipe(
        catchError(() => {
          throw new BadRequestException('Bad player informations');
        }),
        map(mapPlayerEntityToPlayerDto)
      );
  }

  @Get()
  findAll(): Observable<PlayerDto[]> {
    return this.playerService
      .findAllPlayers()
      .pipe(map(mapPlayerEntitiesToPlayerDtos));
  }
}
