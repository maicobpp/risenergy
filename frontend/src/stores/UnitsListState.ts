import { makeAutoObservable } from 'mobx';
import { ICustomer } from '../interfaces/ICustomer';
import { IUnit } from '../interfaces/IUnit';
import { api } from '../lib/api';
import sleep from '../utils/sleep';

class UnitsListStore {
  units: Array<IUnit> = [];

  customer: ICustomer = {
    id: '',
    name: '',
    email: '',
    phone: '',
  };

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadUnits = async (customer_id: string) => {
    this.isLoading = true;
    await sleep(300);
    const responseUnits = await api.get('customer/units', {
      params: {
        customer_id,
      },
    });
    this.units = responseUnits.data;
    const responseCustomer = await api.get('customer', {
      params: {
        id: customer_id,
      },
    });
    this.customer = responseCustomer.data;
    this.isLoading = false;
  };

  deleteUnit = async (id: string, customer_id: string) => {
    await api.delete('unit/delete', {
      params: {
        id,
      },
    });
    this.loadUnits(customer_id);
  };
}

export const stateUnitsList = new UnitsListStore();
