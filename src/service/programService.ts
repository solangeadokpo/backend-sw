import { PrismaClient } from '../generated/prisma';
import { Program } from '../model/programModel';

const prisma = new PrismaClient();

export const getAllPrograms = async (): Promise<Program[]> => {
  return prisma.program.findMany();
};

export const getProgramById = async (id: string): Promise<Program | null> => {
  return prisma.program.findUnique({ where: { id } });
};

export const createProgram = async (data: Omit<Program, 'id' | 'created_at'>): Promise<Program> => {
  return prisma.program.create({ data });
};

export const updateProgram = async (id: string, data: Partial<Program>): Promise<Program> => {
  return prisma.program.update({
    where: { id },
    data,
  });
};

export const deleteProgram = async (id: string): Promise<Program> => {
  return prisma.program.delete({ where: { id } });
};
