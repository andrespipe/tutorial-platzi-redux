import axios from 'axios';
import { PUBLICATION_ACTIONS, IPublication } from '../../types/publicationType';

export const getPublications= () => async (dispatch: Function) => {
  dispatch({
    type: PUBLICATION_ACTIONS.LOADING,
    payload: [],
  });
  try {
    const promise = await axios.get<IPublication[]>('https://jsonplaceholder.typicode.com/posts');
    const publications = promise.data;
    dispatch({
      payload: publications,
      type: PUBLICATION_ACTIONS.GET_PUBLICATIONS,
    });
  } catch(error) {
    dispatch({
      payload: error.message,
      type: PUBLICATION_ACTIONS.ERROR,
    });
  }
}

export const getPublicationsByUser = (userId: number) => async (dispatch: Function, getState: Function) => {
  dispatch({
    type: PUBLICATION_ACTIONS.LOADING,
    payload: [],
  });
  try {
    const { publicationsReducer: { publications } } = getState();

    if (!publications[userId]) {
      const promise = await axios.get<IPublication[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      publications[userId] = promise.data;
    }

    dispatch({
      payload: publications,
      type: PUBLICATION_ACTIONS.GET_PUBLICATIONS_BY_USER,
    });
  } catch(error) {
    console.error(error);
    dispatch({
      payload: error.message,
      type: PUBLICATION_ACTIONS.ERROR,
    });
  }
}
