import { IPublications, PUBLICATIONS_ACTIONS } from "../../types/publicationsTypes";

const INITIAL_STATE: IPublications = {
  error : '',
  isLoading: false,
  publications: [],
};

const publicationsReducer = (state: IPublications = INITIAL_STATE, action: { type: PUBLICATIONS_ACTIONS; payload: any; }) => {
  switch(action.type) {
    case PUBLICATIONS_ACTIONS.GET_PUBLICATIONS:
      return {
        ...state,
        isLoading: true,
        publications: action.payload,
      };
    case PUBLICATIONS_ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PUBLICATIONS_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PUBLICATIONS_ACTIONS.GET_PUBLICATIONS_BY_USER:
      return {
        ...state,
        isLoading: true,
        publications: action.payload,
      };
    default: return state;
  }
}

export default publicationsReducer;
