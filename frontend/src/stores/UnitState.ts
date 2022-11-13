import { makeAutoObservable } from 'mobx';
import { IUnit } from '../interfaces/IUnit';
import { api } from '../lib/api';
import sleep from '../utils/sleep';

export class UnitStore {
  unit: IUnit = { id: '', customer_id: '', data: { id: '' } };

  isLoading = false;

  isSaving = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadUnit = async (unit: IUnit) => {
    console.log(unit.customer_id);
    if (unit.id) {
      this.isLoading = true;
      await sleep(300);
      const response = await api.get('unit', {
        params: {
          id: unit.id,
        },
      });
      this.unit = response.data;
      this.isLoading = false;
    } else {
      this.unit = {
        id: '',
        customer_id: unit.customer_id,
        data: { id: '' },
      };
    }
  };

  saveUnit = async () => {
    this.isSaving = true;
    await sleep(300);
    console.log(this.unit);
    await api.post('unit/store', {
      ...this.unit,
    });
  };
}

export const stateUnit = new UnitStore();
