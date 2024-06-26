import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateDeportistaInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  identificacion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  equipo: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  estado?: string = 'Activo';
}
