import { Request, Response } from 'express';
import { CanchaRepository } from '../repositories/CanchaRepository';

const canchaRepository = new CanchaRepository();

export const getAllCanchas = async (req: Request, res: Response) => {
    const canchas = await canchaRepository.findAll();
    res.json(canchas);
};

export const getCanchaById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const cancha = await canchaRepository.findById(id);
    if (cancha) {
        res.json(cancha);
    } else {
        res.status(404).json({ message: 'Cancha not found' });
    }
};

export const createCancha = async (req: Request, res: Response) => {
    const newCancha = await canchaRepository.create(req.body);
    res.status(201).json(newCancha);
};

export const updateCancha = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const updatedCancha = await canchaRepository.update(id, req.body);
    if (updatedCancha) {
        res.json(updatedCancha);
    } else {
        res.status(404).json({ message: 'Cancha not found' });
    }
};

export const deleteCancha = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const deleted = await canchaRepository.delete(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cancha not found' });
    }
};
