import { Deportista } from '../entities/Deportista';

export class DeportistaRepository {
    public async findAll() {
        return Deportista.findAll();
    }

    public async findById(id: number) {
        return Deportista.findByPk(id);
    }

    public async create(deportista: any) {
        return Deportista.create(deportista);
    }

    public async update(id: number, updateData: any) {
        const deportista = await Deportista.findByPk(id);
        if (deportista) {
            return deportista.update(updateData);
        }
        return null;
    }

    public async delete(id: number) {
        const deportista = await Deportista.findByPk(id);
        if (deportista) {
            return deportista.destroy();
        }
        return null;
    }
}
