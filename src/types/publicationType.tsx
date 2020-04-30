import { IUserProps, IUserTable } from "./userType";

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

export enum PUBLICATION_ACTIONS {
  ERROR = 'error_publications',
  GET_PUBLICATIONS = 'get_publications',
  GET_PUBLICATIONS_BY_USER = 'get_publications_by_user',
  LOADING = 'loading_publications',
}

export interface IPublicationProps extends IUserProps {
  publications: IPublication[];
  getPublications: Function;
  getPublicationsByUser: Function;
  publicationsReducer: IPublications;
  usersReducer: IUserTable;
}
