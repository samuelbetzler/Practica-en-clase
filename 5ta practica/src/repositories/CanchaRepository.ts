// repositories/CanchaRepository.ts
import { Cancha } from '../entities/Cancha';

export class CanchaRepository {
    public async findAll() {
        return Cancha.findAll();
    }

    public async findById(id: number) {
        return Cancha.findByPk(id);
    }

    public async create(cancha: any) {
        return Cancha.create(cancha);
    }

    public async update(id: number, updateData: any) {
        const cancha = await Cancha.findByPk(id);
        if (cancha) {
            return cancha.update(updateData);
        }
        return null;
    }

    public async delete(id: number) {
        const cancha = await Cancha.findByPk(id);
        if (cancha) {
            return cancha.destroy();
        }
        return null;
    }
}
