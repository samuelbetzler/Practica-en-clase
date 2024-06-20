import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cancha } from 'src/cancha/entities/cancha.entity';
import { Deportista } from 'src/deportista/entities/deportista.entity';

@Entity({ name: 'SeparacionCancha' })
export class SeparacionCancha {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  canchaId: number;

  @Column()
  deportistaId: number;

  @Column({ type: 'timestamp' })
  fechaSeparacion: Date;

  @Column({ type: 'timestamp' })
  horaDesde: Date;

  @Column({ type: 'timestamp' })
  horaHasta: Date;

  @Column({ default: 'Activo' })
  estado: string;

  @ManyToOne(() => Cancha, cancha => cancha.separaciones)
  cancha: Cancha;

  @ManyToOne(() => Deportista, deportista => deportista.separacionesCancha)
  deportista: Deportista;
}
