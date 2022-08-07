export interface IUnit {
  id?: string;
  name: string;
  number: string;
  orientation: string;
  inclination: number;
  fixed_cost?: number;
  last_bill?: number;
  minimun_charge: number;
  customer_id: string;
  data_id: string;
}
