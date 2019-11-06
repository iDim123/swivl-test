import parse from 'parse-link-header';
import {
  fetchUsersSuccess,
  fetchUserSuccess,
  fetchDataError,
  fetchDataPending
} from '../redusers/users';

//prettier-ignore
export const fetchUsersAction = (url = 'https://api.github.com/users?per_page=10&since=0') => dispatch => {
  const field = 'users';
  let nextPageUrl = '';
  dispatch(fetchDataPending(field));
  fetch(url)
    .then(res => {
      nextPageUrl = parse(res.headers.get('Link')).next.url;
      return res.json();
    })
    .then(res => {
      if (res.message) {
        throw res.message;
      }
      dispatch(
        fetchUsersSuccess({
          nextPageUrl: nextPageUrl,
          currPageUrl: url,
          data: res,
          field
        })
      );
      return res;
    })
    .catch(error => {
      dispatch(fetchDataError(field, error));
    });
};

export const fetchUserAction = userName => dispatch => {
  const field = 'currentUser';
  dispatch(fetchDataPending(field));
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(res => {
      if (res.message) {
        throw res.message;
      }
      dispatch(
        fetchUserSuccess({
          data: res,
          field
        })
      );
      return res;
    })
    .catch(error => {
      dispatch(fetchDataError(field, error));
    });
};
