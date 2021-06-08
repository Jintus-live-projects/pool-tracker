import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>
  ) {}

  createPlayerEntity(userId: number): Observable<PlayerEntity> {
    const player = this.playerRepository.create({ userId });
    return from(this.playerRepository.save(player));
  }

  findAllPlayers(): Observable<PlayerEntity[]> {
    return from(this.playerRepository.find());
  }
}
