import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, isNotEmpty } from 'class-validator';

@InputType()
export class CreateCanchaInput {
  

  @Field(() => String)
  @IsString()
  descripcion: string;

  @Field({ nullable: true, defaultValue: 'Activo' })
  @IsString()
  @IsOptional()
  estado?: string = 'Activo';
}
