import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../entities/player.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>
  ) {
  }

  isPseudoExist(pseudo: string): Observable<boolean> {
    return from(this.playerRepository.count({ pseudo }))
      .pipe(map(count => count > 0));
  }

  isEmailExist(email: string): Observable<boolean> {
    return from(this.playerRepository.count({ email }))
      .pipe(map(count => count > 0));
  }

  createPlayerEntity(pseudo: string, email: string): Observable<PlayerEntity> {
    const player = this.playerRepository.create({ email, pseudo });
    return from(this.playerRepository.save(player));
  }

  findAllPlayers(): Observable<PlayerEntity[]> {
    return from(this.playerRepository.find());
  }
}
