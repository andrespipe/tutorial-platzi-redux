import { PUBLICATION_ACTIONS } from "../../types/publicationTypes";

const publicationReducer = (state: {} = {}, action: { type: PUBLICATION_ACTIONS, payload: any }) => {
  switch(action.type) {
    case PUBLICATION_ACTIONS.LOADING:
      return  {
        ...state,
        isLoading: true,
      };
    case PUBLICATION_ACTIONS.GET_PUBLICATION:
      return {
        ...state,
        isLoading: false,
        publication: action.payload,
      };
    case PUBLICATION_ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
}

export default publicationReducer;
