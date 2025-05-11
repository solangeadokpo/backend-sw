export interface Program {
  id: string;
  name: string;
  objective?: string | null;
  duration?: string | null;
  eligibility_conditions?: string | null;
  support_type: string;
  budget?: string | null;
  launch_date?: Date | null;
  created_at?: Date | null;
}
