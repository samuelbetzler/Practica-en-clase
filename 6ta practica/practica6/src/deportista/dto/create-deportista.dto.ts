import { IsString, IsOptional } from 'class-validator';

export class CreateDeportistaDto {
  @IsString()
  nombre: string;

  @IsString()
  identificacion: string;

  @IsString()
  equipo: string;

  @IsString()
  @IsOptional()
  estado?: string = 'Activo';
}
