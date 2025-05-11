export interface Company {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  logo_url?: string | null;
  status?: string | null;
  sector?: string | null;
  creation_date?: Date | null;
  location_city?: string | null;
  description?: string | null;
  revenue?: string | null;
  project_deck_url?: string | null;
  created_at?: Date | null;
}
