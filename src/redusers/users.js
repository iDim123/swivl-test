import produce from 'immer';

const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  users: [],
  currentUser: null,
  fetchStatus: {
    users: {
      pending: false,
      error: null
    },
    currentUser: {
      pending: false,
      error: null
    }
  }
};

export default function users(state = initialState, action) {
  return produce(state, drafState => {
    switch (action.type) {
      case FETCH_DATA_PENDING:
        drafState.fetchStatus[action.field].pending = true;
        break;
      case FETCH_DATA_ERROR: {
        const { field, error } = action;
        drafState.fetchStatus[field] = {
          pending: false,
          error
        };
        break;
      }
      case FETCH_USERS_SUCCESS: {
        const { field, data } = action;
        drafState.fetchStatus[field].pending = false;
        drafState[field] = data;
        break;
      }
      case FETCH_USER_SUCCESS: {
        const { field, data } = action;
        drafState.fetchStatus[field].pending = false;
        drafState.currentUser = data;
        break;
      }
      case SET_CURRENT_USER: {
        drafState.currentUser = state.users.find(user => user.id === action.id);
        break;
      }
      default:
        return state;
    }
  });
}

export const fetchDataPending = field => {
  return {
    type: FETCH_DATA_PENDING,
    field
  };
};

export const fetchDataError = (field, error) => {
  return {
    type: FETCH_DATA_ERROR,
    field,
    error
  };
};

export const fetchUsersSuccess = ({ field, data, currPageUrl, nextPageUrl }) => {
  return {
    type: FETCH_USERS_SUCCESS,
    data,
    field,
    currPageUrl,
    nextPageUrl
  };
};

export const fetchUserSuccess = ({ field, data }) => {
  return {
    type: FETCH_USER_SUCCESS,
    field,
    data
  };
};

export const setCurrentUserAction = id => {
  return {
    type: SET_CURRENT_USER,
    id
  };
};
