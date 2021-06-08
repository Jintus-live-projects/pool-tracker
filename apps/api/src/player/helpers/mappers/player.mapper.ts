import { PlayerEntity } from '../../entities/player.entity';
import { PlayerDto } from '../../dtos/player.dto';

export const mapPlayerEntityToPlayerDto = (entity: PlayerEntity): PlayerDto => {
  return {
    id: entity.id,
    userId: entity.userId,
  };
};
export const mapPlayerEntitiesToPlayerDtos = (
  entities: PlayerEntity[]
): PlayerDto[] => {
  return entities.map(mapPlayerEntityToPlayerDto);
};
