import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity'; 

@ObjectType()
@Entity({ name: 'canchas' })
export class Cancha {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  descripcion: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => SeparacionCancha, separacionCancha => separacionCancha.cancha, { cascade: true })
  @Field(() => [SeparacionCancha], { nullable: true })
  separaciones?: SeparacionCancha[];
}
