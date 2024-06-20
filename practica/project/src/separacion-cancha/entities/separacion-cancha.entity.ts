import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cancha } from 'src/cancha/entities/cancha.entity'; 
import { Deportista } from 'src/deportista/entities/deportista.entity'; 

@ObjectType()
@Entity({ name: 'separaciones_cancha' })
export class SeparacionCancha {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  id: number;

  @Column()
  canchaId: number;

  @Column()
  deportistaId: number;

  @Column()
  @Field(() => Date)
  fechaSeparacion: Date;

  @Column()
  @Field(() => Date)
  horaDesde: Date;

  @Column()
  @Field(() => Date)
  horaHasta: Date;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @ManyToOne(() => Cancha, cancha => cancha.separaciones, { eager: true })
  @JoinColumn({ name: 'canchaId' })
  @Field(() => Cancha)
  cancha: Cancha;

  @ManyToOne(() => Deportista, deportista => deportista.separaciones, { eager: true })
  @JoinColumn({ name: 'deportistaId' })
  @Field(() => Deportista)
  deportista: Deportista;
}
