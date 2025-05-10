export interface Program {
  id: string;
  name: string;
  objective?: string;
  duration?: string;
  eligibility_conditions?: string;
  support_type: string;
  budget?: string;
  launch_date?: Date;
  created_at?: Date;
}
