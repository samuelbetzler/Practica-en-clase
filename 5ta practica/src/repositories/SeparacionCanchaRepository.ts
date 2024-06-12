import { SeparacionCancha } from '../entities/SeparacionCancha';

export class SeparacionCanchaRepository {
    public async findAll() {
        return SeparacionCancha.findAll();
    }

    public async findById(id: number) {
        return SeparacionCancha.findByPk(id);
    }

    public async create(separacion: any) {
        return SeparacionCancha.create(separacion);
    }

    public async update(id: number, updateData: any) {
        const separacion = await SeparacionCancha.findByPk(id);
        if (separacion) {
            return separacion.update(updateData);
        }
        return null;
    }

    public async delete(id: number) {
        const separacion = await SeparacionCancha.findByPk(id);
        if (separacion) {
            return separacion.destroy();
        }
        return null;
    }
}
