import { ICity } from './ICity';
import { ICustomer } from './ICustomer';
import { IUnit } from './IUnit';

export interface IProject {
  id: string;
  date: string;
  status: string;
  orientation: string;
  inclination: number;
  customer: ICustomer;
  city: ICity;
  units?: IUnit[];
}
