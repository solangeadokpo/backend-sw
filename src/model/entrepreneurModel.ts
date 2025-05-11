export interface Entrepreneur {
  id: string;
  last_name: string;
  first_name: string;
  gender: string;
  phone: string;
  email: string;
  photo_url?: string;
  cv_url?: string;
  birth_date?: string,
  residence_city?: string,
  residence_department?: string,
  employment?: string,
  sector?: string,
  created_at?: Date;
}

export interface CreateEntrepreneurDto {
  last_name: string;
  first_name: string;
  gender: string;
  phone: string;
  email: string;
  photo_url?: string;
  cv_url?: string;
  birth_date?: string,
  residence_city?: string,
  residence_department?: string,
  employment?: string,
  sector?: string,
}

export interface UpdateEntrepreneurDto {
  last_name?: string;
  first_name?: string;
  gender?: string;
  phone?: string;
  email?: string;
  photo_url?: string;
  cv_url?: string;
  birth_date?: string,
  residence_city?: string,
  residence_department?: string,
  employment?: string,
  sector?: string,
}

export interface EntrepreneurResponse {
  success: boolean;
  data?: Entrepreneur | Entrepreneur[] | null;
  message?: string;
  error?: string;
}