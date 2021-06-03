import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { combineLatest, Observable } from 'rxjs';
import { CreatePlayerDto, PlayerDto } from '../dtos/player.dto';
import { PlayerService } from '../services/player.service';
import { catchError, concatMap, map } from 'rxjs/operators';
import { mapPlayerEntitiesToPlayerDtos, mapPlayerEntityToPlayerDto } from '../helpers/mappers/player.mapper';

@Controller('players')
export class PlayersController {

  constructor(private playerService: PlayerService) {
  }

  @Post()
  registerPlayer(@Body() playerInformations: CreatePlayerDto): Observable<PlayerDto> {
    return combineLatest(
      [
        this.playerService.isEmailExist(playerInformations.email),
        this.playerService.isPseudoExist(playerInformations.pseudo)
      ])
      .pipe(
        concatMap(isExist => {
          if (isExist[0]) {
            throw new BadRequestException('Player email already exist');
          } else if (isExist[1]) {
            throw new BadRequestException('Player pseudo already exist');
          }
          return this.playerService.createPlayerEntity(playerInformations.pseudo, playerInformations.email)
            .pipe(catchError(() => {
              throw new BadRequestException('Bad player informations');
            }));
        }),
        map(mapPlayerEntityToPlayerDto)
      );
  }

  @Get()
  findAll(): Observable<PlayerDto[]> {
    return this.playerService.findAllPlayers()
      .pipe(map(mapPlayerEntitiesToPlayerDtos));
  }
}
