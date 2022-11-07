import { makeAutoObservable } from 'mobx';
import { ICustomer } from '../interfaces/ICustomer';
import { api } from '../lib/api';
import sleep from '../utils/sleep';

export class CustomerStore {
  customer: ICustomer = {
    id: '',
    name: '',
    email: '',
    phone: '',
  };

  isLoading = false;

  isSaving = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadCustomer = async (id: string) => {
    if (id) {
      this.isLoading = true;
      await sleep(300);
      const response = await api.get('customer', {
        params: {
          id,
        },
      });
      this.customer = response.data;
      this.isLoading = false;
      this.isSaving = false;
    }
  };

  saveCustomer = async () => {
    this.isSaving = true;
    await sleep(300);
    const response = await api.post('customer/store', {
      ...this.customer,
    });
    const { id } = response.data;
    this.loadCustomer(id);
  };
}

export const stateCustomer = new CustomerStore();
