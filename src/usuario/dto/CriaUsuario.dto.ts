import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsNotEmpty()
  nome: string;
  @IsEmail()
  email: string;
  @MinLength(6)
  senha: string;
}
