import { IsEmail, IsNotEmpty } from 'class-validator';

class BasePlayerDto {
  @IsNotEmpty()
  pseudo: string;
}

export class PlayerDto extends BasePlayerDto {
  id: number;
}

export class CreatePlayerDto extends BasePlayerDto {
  @IsEmail()
  email: string;
}
