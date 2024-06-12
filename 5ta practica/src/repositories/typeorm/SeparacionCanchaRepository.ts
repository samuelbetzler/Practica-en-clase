import { AppDataSource } from '../../datasources/typeorm-datasource';
import { SeparacionCancha } from '../../entities/typeorm/SeparacionCancha';

export class SeparacionCanchaRepository {
    private repository = AppDataSource.getRepository(SeparacionCancha);

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOneBy({ id });
    }

    async create(separacion: Partial<SeparacionCancha>) {
        const newSeparacion = this.repository.create(separacion);
        return this.repository.save(newSeparacion);
    }

    async update(id: number, separacion: Partial<SeparacionCancha>) {
        await this.repository.update(id, separacion);
        return this.findById(id);
    }

    async delete(id: number) {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
