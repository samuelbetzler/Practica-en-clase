import { IsInt, IsDate, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateSeparacionCanchaDto {
  @IsInt()
  canchaId: number;

  @IsInt()
  deportistaId: number;

  @IsDateString()
  fechaSeparacion: string;

  @IsDateString()
  horaDesde: string;

  @IsDateString()
  horaHasta: string;

  @IsOptional()
  @IsString()
  estado?: string = 'Activo';
}
