import { AppDataSource } from '../../datasources/typeorm-datasource';
import { Deportista } from '../../entities/typeorm/Deportista';

export class DeportistaRepository {
    private repository = AppDataSource.getRepository(Deportista);

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOneBy({ id });
    }

    async create(deportista: Partial<Deportista>) {
        const newDeportista = this.repository.create(deportista);
        return this.repository.save(newDeportista);
    }

    async update(id: number, deportista: Partial<Deportista>) {
        await this.repository.update(id, deportista);
        return this.findById(id);
    }

    async delete(id: number) {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
