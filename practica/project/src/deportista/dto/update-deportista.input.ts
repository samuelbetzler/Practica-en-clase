import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { CreateDeportistaInput } from './create-deportista.input';

@InputType()
export class UpdateDeportistaInput extends PartialType(CreateDeportistaInput) {

  @Field(() => ID)
  id: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  nombre?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  identificacion?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  equipo?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string;
}
