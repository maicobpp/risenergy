import { IMonthData } from './IMonthData';

export interface IUnit {
  id: string;
  name?: string;
  number?: string;
  fixed_cost?: number;
  last_bill?: number;
  minimun_charge?: number;
  customer_id: string;
  data_id?: string;
  data: IMonthData;
  avg?: number;
}
