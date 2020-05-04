import { IUserProps, IUserTable } from "./userTypes";

export interface IPublication {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface IPublications {
  error: string;
  isLoading: boolean;
  publications: IPublication[][];
}

export enum PUBLICATIONS_ACTIONS {
  ERROR = 'error_publications',
  GET_PUBLICATIONS = 'get_publications',
  GET_PUBLICATIONS_BY_ID = 'get_publications_by_id',
  GET_PUBLICATIONS_BY_USER = 'get_publications_by_user',
  LOADING = 'loading_publications',
}

export interface IPublicationsProps extends IUserProps {
  publications: IPublication[];
  getPublications: Function;
  getPublicationsByUser: Function;
  publicationsReducer: IPublications;
  usersReducer: IUserTable;
}
