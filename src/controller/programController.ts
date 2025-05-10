import { Request, Response } from 'express';
import * as programService from '../service/programService';

export const getAll = async (_: Request, res: Response) => {
  const programs = await programService.getAllPrograms();
  res.json(programs);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const program = await programService.getProgramById(id);
  if (!program) return res.status(404).json({ message: 'Program not found' });
  res.json(program);
};

export const create = async (req: Request, res: Response) => {
  const program = await programService.createProgram(req.body);
  res.status(201).json(program);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await programService.updateProgram(id, req.body);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await programService.deleteProgram(id);
  res.json(deleted);
};
