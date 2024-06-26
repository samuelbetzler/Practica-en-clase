import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity'; 

@ObjectType()
@Entity({ name: 'Deportista' })
export class Deportista {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  identificacion: string;

  @Column()
  @Field(() => String)
  equipo: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => SeparacionCancha, separacionCancha => separacionCancha.deportista, { cascade: true })
  @Field(() => [SeparacionCancha], { nullable: true })
  separaciones?: SeparacionCancha[];
}
