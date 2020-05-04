import { IPublicationsProps, IPublications, IPublication } from "./publicationsTypes";

export enum PUBLICATION_ACTIONS {
  GET_PUBLICATION = 'get_publication',
  ERROR = 'error_publication',
  LOADING = 'loading_publication',
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IPublicationComments extends IPublication {
  comments: IComment[];
}

export interface IPublicationReducer {
  error: string;
  isLoading: boolean;
  publicationsComments: IPublicationComments[][];
}

export interface IPublicationProps extends IPublicationsProps {
  publicationComments: IPublicationComments[][];
  getPublication: Function;
  publicationsReducer: IPublications;
  publicationReducer: IPublicationReducer;
}