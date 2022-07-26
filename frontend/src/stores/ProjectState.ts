import { makeAutoObservable } from 'mobx';
import { IProject } from '../interfaces/IProject';
import { api } from '../lib/api';
import { currentDate } from '../utils/currentDate';
import sleep from '../utils/sleep';

export class ProjectStore {
  project: IProject = {
    id: '',
    date: currentDate,
    inclination: 22,
    orientation: 'Norte',
    status: 'quote',
    city: { id: '', city: '' },
    customer: { id: '' },
    units: [{ id: '', customer_id: '', data: { id: '' } }],
  };

  isLoading = false;

  isSaving = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadProject = async (id: string) => {
    if (id) {
      this.isLoading = true;
      await sleep(300);
      const response = await api.get('project', {
        params: {
          id,
        },
      });
      this.project = response.data;
      this.isLoading = false;
      this.isSaving = false;
    }
  };

  saveProject = async () => {
    this.isSaving = true;
    await sleep(300);
    const response = await api.post('project/store', {
      ...this.project,
    });
    const { id } = response.data;
    this.loadProject(id);
  };
}

export const stateProject = new ProjectStore();
