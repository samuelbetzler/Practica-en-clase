import { InputType, Field, PartialType, ID , Int} from '@nestjs/graphql';
import { IsInt, IsDateString, IsString, IsOptional } from 'class-validator';
import { CreateSeparacionCanchaInput } from './create-separacion-cancha.input';

@InputType()
export class UpdateSeparacionCanchaInput extends PartialType(CreateSeparacionCanchaInput) {

  @Field(() => ID)
  id: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  canchaId?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  deportistaId?: number;

  @Field(() => Date, { nullable: true })
  @IsDateString()
  @IsOptional()
  fechaSeparacion?: Date;

  @Field(() => Date, { nullable: true })
  @IsDateString()
  @IsOptional()
  horaDesde?: Date;

  @Field(() => Date, { nullable: true })
  @IsDateString()
  @IsOptional()
  horaHasta?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  estado?: string;
}
