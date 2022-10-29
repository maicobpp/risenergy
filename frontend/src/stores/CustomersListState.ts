import { makeAutoObservable } from 'mobx';
import { Customer } from '../interfaces/Customer';
import { api } from '../lib/api';
import sleep from '../lib/sleep';

class CustomersListStore {
  customers: Array<Customer> = [];

  isloading = false;

  constructor() {
    makeAutoObservable(this);
    this.loadCustomers();
  }

  async loadCustomers() {
    this.isloading = true;
    await sleep(300);
    const reponse = await api.get('customer/list');
    this.customers = reponse.data;
    this.isloading = false;
  }

  async deleteCustomer(id: string) {
    await api.delete('customer/delete', {
      params: {
        id,
      },
    });
    this.loadCustomers();
  }
}

export const stateCustomersList = new CustomersListStore();

// export default () => ({
//     customers: [],
//     isLoading: false,

//     init() {
//         this.loadCustomers()
//     },

//     // get activeCustomers() {
//         //return this.customers.filter(customer => customer.active)
//     // },

//     async loadCustomers() {
//         this.isLoading = true

//         const response = await api.get('customer/list')

//         this.customers = response.data

//         this.customers.map((customer) => {
//             console.log(customer);
//         })

//         this.isLoading = false
//     },

//     // async bigFunction(...args) {
//     //     return bigFunction(this, ...args)
//     // }
// })
