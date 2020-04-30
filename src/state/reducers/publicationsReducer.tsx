import { IPublications, PUBLICATION_ACTIONS } from "../../types/publicationType";

const INITIAL_STATE: IPublications = {
  error : '',
  isLoading: false,
  publications: [],
};

const publicationsReducer = (state: IPublications = INITIAL_STATE, action: { type: PUBLICATION_ACTIONS; payload: any; }) => {
  switch(action.type) {
    case PUBLICATION_ACTIONS.GET_PUBLICATIONS:
      return {
        ...state,
        isLoading: true,
        publications: action.payload,
      };
    case PUBLICATION_ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case PUBLICATION_ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PUBLICATION_ACTIONS.GET_PUBLICATIONS_BY_USER:
      return {
        ...state,
        isLoading: true,
        publications: action.payload,
      };
    default: return state;
  }
}

export default publicationsReducer;
