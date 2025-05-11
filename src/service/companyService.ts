import { PrismaClient } from '../generated/prisma';
import { Company } from '../model/companyModel';

const prisma = new PrismaClient();

export const getAllCompanies = async (): Promise<Company[]> => {
  const companies = await prisma.company.findMany();
  return companies.map(c => ({ ...c, revenue: c.revenue ? c.revenue.toString() : null }));
};

export const getCompanyById = async (id: string): Promise<Company | null> => {
  const c = await prisma.company.findUnique({ where: { id } });
  return c ? { ...c, revenue: c.revenue ? c.revenue.toString() : null } : null;
};

export const createCompany = async (data: Omit<Company, 'id' | 'created_at'>): Promise<Company> => {
  const c = await prisma.company.create({ data });
  return { ...c, revenue: c.revenue ? c.revenue.toString() : null };
};

export const updateCompany = async (id: string, data: Partial<Company>): Promise<Company> => {
  const c = await prisma.company.update({
    where: { id },
    data,
  });
  return { ...c, revenue: c.revenue ? c.revenue.toString() : null };
};

export const deleteCompany = async (id: string): Promise<Company> => {
  const c = await prisma.company.delete({ where: { id } });
  return { ...c, revenue: c.revenue ? c.revenue.toString() : null };
};

export const searchCompanies = async (params: { name?: string; sector?: string; location_city?: string }): Promise<Company[]> => {
  const companies = await prisma.company.findMany({
    where: {
      ...(params.name ? { name: { contains: params.name, mode: 'insensitive' } } : {}),
      ...(params.sector ? { sector: { contains: params.sector, mode: 'insensitive' } } : {}),
      ...(params.location_city ? { location_city: { contains: params.location_city, mode: 'insensitive' } } : {}),
    },
  });
  return companies.map(c => ({ ...c, revenue: c.revenue ? c.revenue.toString() : null }));
};
