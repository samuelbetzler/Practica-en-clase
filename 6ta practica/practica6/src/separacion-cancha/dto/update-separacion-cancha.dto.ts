import { PartialType } from '@nestjs/mapped-types';
import { CreateSeparacionCanchaDto } from './create-separacion-cancha.dto';

export class UpdateSeparacionCanchaDto extends PartialType(CreateSeparacionCanchaDto) {}
