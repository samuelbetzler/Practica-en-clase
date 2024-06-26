import { InputType, Field, PartialType, ID, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt } from 'class-validator';
import { CreateCanchaInput } from './create-cancha.input';

@InputType()
export class UpdateCanchaInput extends PartialType(CreateCanchaInput) {

  @Field(() => Int)
  @IsInt()
  id: number;
}
