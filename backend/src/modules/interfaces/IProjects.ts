export interface IProjects {
  id?: string;
  date: Date;
  status: number;
  customer_id: string;
  org_id: string;
}

export interface IProjectsID {
  id: string;
}

export interface IProjectsOrg {
  org_id: string;
}
