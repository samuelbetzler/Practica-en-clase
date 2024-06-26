import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsDateString, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateSeparacionCanchaInput {

  @Field(() => Int)
  @IsInt()
  canchaId: number;

  @Field(() => Int)
  @IsInt()
  deportistaId: number;

  @Field(() => Date)
  @IsDateString()
  fechaSeparacion: Date;

  @Field(() => Date)
  @IsDateString()
  horaDesde: Date;

  @Field(() => Date)
  @IsDateString()
  horaHasta: Date;

  @Field(() => String)
  @IsString()
  @IsOptional()
  estado?: string = 'Activo';
}

