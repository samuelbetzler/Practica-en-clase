import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity';

@Entity({ name: 'Cancha' })
export class Cancha {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  descripcion: string;

  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => SeparacionCancha, separacionCancha => separacionCancha.cancha)
  separaciones: SeparacionCancha[];
}
