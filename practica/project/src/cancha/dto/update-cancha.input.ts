import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { CreateCanchaInput } from './create-cancha.input';

@InputType()
export class UpdateCanchaInput extends PartialType(CreateCanchaInput) {

  @Field(() => ID)
  id: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string;
}
