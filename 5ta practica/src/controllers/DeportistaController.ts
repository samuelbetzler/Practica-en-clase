import { Request, Response } from 'express';
import { DeportistaRepository } from '../repositories/DeportistaRepository';

const deportistaRepository = new DeportistaRepository();

export const getAllDeportistas = async (req: Request, res: Response) => {
    const deportistas = await deportistaRepository.findAll();
    res.json(deportistas);
};

export const getDeportistaById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const deportista = await deportistaRepository.findById(id);
    if (deportista) {
        res.json(deportista);
    } else {
        res.status(404).json({ message: 'Deportista not found' });
    }
};

export const createDeportista = async (req: Request, res: Response) => {
    const newDeportista = await deportistaRepository.create(req.body);
    res.status(201).json(newDeportista);
};

export const updateDeportista = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const updatedDeportista = await deportistaRepository.update(id, req.body);
    if (updatedDeportista) {
        res.json(updatedDeportista);
    } else {
        res.status(404).json({ message: 'Deportista not found' });
    }
};

export const deleteDeportista = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const deleted = await deportistaRepository.delete(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Deportista not found' });
    }
};
