import { Request, Response } from 'express';
import { SeparacionCanchaRepository } from '../../repositories/typeorm/SeparacionCanchaRepository';

const separacionCanchaRepository = new SeparacionCanchaRepository();

export const getAllSeparaciones = async (req: Request, res: Response) => {
    const separaciones = await separacionCanchaRepository.findAll();
    res.json(separaciones);
};

export const getSeparacionById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const separacion = await separacionCanchaRepository.findById(id);
    if (separacion) {
        res.json(separacion);
    } else {
        res.status(404).json({ message: 'Separacion not found' });
    }
};

export const createSeparacion = async (req: Request, res: Response) => {
    const newSeparacion = await separacionCanchaRepository.create(req.body);
    res.status(201).json(newSeparacion);
};

export const updateSeparacion = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const updatedSeparacion = await separacionCanchaRepository.update(id, req.body);
    if (updatedSeparacion) {
        res.json(updatedSeparacion);
    } else {
        res.status(404).json({ message: 'Separacion not found' });
    }
};

export const deleteSeparacion = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const deleted = await separacionCanchaRepository.delete(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Separacion not found' });
    }
};
