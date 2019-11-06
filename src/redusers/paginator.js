import produce from 'immer';
import { FETCH_USERS_SUCCESS } from './users';

const ADD_PREV_URL_PAGE = 'ADD_PREV_URL_PAGE';
const REMOVE_PREV_URL_PAGE = 'REMOVE_PREV_URL_PAGE';
const RESET_PREV_PAGES = 'RESET_PREV_PAGES';

const initialState = {
  currPageUrl: '',
  nextPageUrl: '',
  prevPagesUrl: []
};

export default function paginator(state = initialState, action) {
  return produce(state, drafState => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS: {
        const { nextPageUrl, currPageUrl } = action;
        drafState.nextPageUrl = nextPageUrl;
        drafState.currPageUrl = currPageUrl;
        break;
      }
      case ADD_PREV_URL_PAGE:
        drafState.prevPagesUrl.push(state.currPageUrl);
        break;
      case REMOVE_PREV_URL_PAGE:
        drafState.prevPagesUrl.pop();
        break;
      case RESET_PREV_PAGES:
        drafState.prevPagesUrl = [];
        break;
      default:
        return state;
    }
  });
}

export const addPrevPageAction = () => {
  return {
    type: ADD_PREV_URL_PAGE
  };
};

export const removePrevPageAction = () => {
  return {
    type: REMOVE_PREV_URL_PAGE
  };
};

export const resetPrevPagesAction = () => {
  return {
    type: RESET_PREV_PAGES
  };
};
