import axios from 'axios';
import { USER_ACTIONS, IUser } from "../../types/userTypes";

export const getUsers = () => async (dispatch: Function) => {
  dispatch({
    type: USER_ACTIONS.LOADING,
    payload: [],
  });
  try {
    const promise = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    const users = promise.data;
    dispatch({
      payload: users,
      type: USER_ACTIONS.GET_USERS,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      isLoading: false,
      payload: error.message,
      type: USER_ACTIONS.ERROR,
    });
  }
};