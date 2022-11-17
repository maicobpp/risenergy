import { makeAutoObservable } from 'mobx';
import { IProject } from '../interfaces/IProject';
import { api } from '../lib/api';
import sleep from '../utils/sleep';

class ProjectsListStore {
  projects: Array<IProject> = [];

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.loadProject();
  }

  loadProject = async () => {
    this.isLoading = true;
    await sleep(300);
    const response = await api.get('project/list');
    this.projects = response.data;
    this.isLoading = false;
  };

  deleteProject = async (id: string) => {
    await api.delete('project/delete', {
      params: {
        id,
      },
    });
    this.loadProject();
  };
}

export const stateProjectsList = new ProjectsListStore();
