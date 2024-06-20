import { IsInt, IsString, IsDate, IsOptional } from 'class-validator';

export class CreateCanchaDto {
  @IsString()
  descripcion: string;

  @IsString()
  @IsOptional()
  estado?: string = 'Activo';

}
