export interface IProject {
  id?: string;
  date: Date;
  status: number;
  customer_id: string;
  org_id: string;
  city_id: string;
}

export interface IProjectID {
  id: string;
}

export interface IProjectOrg {
  org_id: string;
}
