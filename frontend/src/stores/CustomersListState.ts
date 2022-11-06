import { makeAutoObservable } from 'mobx';
import { ICustomer } from '../interfaces/ICustomer';
import { api } from '../lib/api';
import sleep from '../utils/sleep';

class CustomersListStore {
  customers: Array<ICustomer> = [];

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.loadCustomers();
  }

  loadCustomers = async () => {
    this.isLoading = true;
    await sleep(300);
    const response = await api.get('customer/list');
    this.customers = response.data;
    this.isLoading = false;
  };

  deleteCustomer = async (id: string) => {
    await api.delete('customer/delete', {
      params: {
        id,
      },
    });
    this.loadCustomers();
  };
}

export const stateCustomersList = new CustomersListStore();
