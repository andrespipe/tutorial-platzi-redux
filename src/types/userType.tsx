export interface IUser {
  id?: number;
  email?: string;
  name?: string;
  username?: string;
  website?: string;
}

export interface IUserTable {
  error: string;
  isLoading: boolean;
  users: IUser[];
}

export enum USER_ACTIONS {
  ERROR = 'error_users',
  GET_USERS = 'get_users',
  LOADING = 'loading_users',
}

export interface IUserProps {
  match: any;
  error: string;
  isLoading: boolean;
  users: IUser[];
  getUsers: Function;
}
