import { PUBLICATION_ACTIONS } from '../../types/publicationTypes';
import axios from 'axios';

export const getPublication = (publicationId: number) => async (dispatch: Function, getState: Function) => {
  dispatch({
    type: PUBLICATION_ACTIONS.LOADING,
    payload: {},
  });
  try {
    const { publicationReducer: { publication } } = getState();

    if (!publication[publicationId]) {
      const promise = await axios.get(`https://jsonplaceholder.typicode.com/posts/${publicationId}/comments`);
      publication[publicationId] = promise.data;
    }

    dispatch({
      payload: publication,
      type: PUBLICATION_ACTIONS.GET_PUBLICATION,
    });
  } catch (error) {
    dispatch({
      type: PUBLICATION_ACTIONS.ERROR,
      payload: error.message,
    });
  }
}