import { makeAutoObservable } from 'mobx';
import { Customer } from '../interfaces/Customer';
import { api } from '../lib/api';
import sleep from '../lib/sleep';

export class CustomerStore {
  customer: Customer = {
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
      const reponse = await api.get('customer', {
        params: {
          id,
        },
      });
      this.customer = reponse.data;
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

  // deleteCustomer = async (id: string) => {
  //   await sleep(300);
  //   await api.delete('customer/delete', {
  //     params: {
  //       id,
  //     },
  //   });
  // };
}

export const stateCustomer = new CustomerStore();
