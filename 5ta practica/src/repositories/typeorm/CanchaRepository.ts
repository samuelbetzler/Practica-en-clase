import { AppDataSource } from '../../datasources/typeorm-datasource';
import { Cancha } from '../../entities/typeorm/Cancha';

export class CanchaRepository {
    private repository = AppDataSource.getRepository(Cancha);

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOneBy({ id });
    }

    async create(cancha: Partial<Cancha>) {
        const newCancha = this.repository.create(cancha);
        return this.repository.save(newCancha);
    }

    async update(id: number, cancha: Partial<Cancha>) {
        await this.repository.update(id, cancha);
        return this.findById(id);
    }

    async delete(id: number) {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
