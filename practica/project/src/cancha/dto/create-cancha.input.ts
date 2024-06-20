import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCanchaInput {

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
