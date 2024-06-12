import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Deportista {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;

    @Column()
    equipo: string;

    @Column({ default: 'Activo' })
    estado: string;
}
