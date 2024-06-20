import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity';

@Entity({ name: 'Deportista' })
export class Deportista {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @Column()
  equipo: string;

  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => SeparacionCancha, separacionCancha => separacionCancha.deportista)
  separacionesCancha: SeparacionCancha[];
}
