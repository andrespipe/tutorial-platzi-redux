import { USER_ACTIONS, IUserTable } from '../../types/userType';

const INITIAL_STATE: IUserTable = {
  error : '',
  isLoading: false,
  users: [],
};

const usersReducer = (state: IUserTable = INITIAL_STATE, action: { type: USER_ACTIONS; payload: any; }) => {
  switch(action.type) {
    case USER_ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case USER_ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: return state;
  }
}

export default usersReducer;
