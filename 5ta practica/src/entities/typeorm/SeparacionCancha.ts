import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cancha } from './Cancha';
import { Deportista } from './Deportista';

@Entity()
export class SeparacionCancha {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaSeparacion: Date;

    @Column()
    horaDesde: Date;

    @Column()
    horaHasta: Date;

    @Column({ default: 'Activo' })
    estado: string;

    @ManyToOne(() => Cancha)
    @JoinColumn({ name: 'canchaId' })
    cancha: Cancha;

    @ManyToOne(() => Deportista)
    @JoinColumn({ name: 'deportistaId' })
    deportista: Deportista;
}
