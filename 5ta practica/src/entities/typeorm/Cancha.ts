import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cancha {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column({ default: 'Activo' })
    estado: string;
}
