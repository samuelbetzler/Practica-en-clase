import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity'; 

@ObjectType()
@Entity({ name: 'Cancha' })
export class Cancha {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
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
