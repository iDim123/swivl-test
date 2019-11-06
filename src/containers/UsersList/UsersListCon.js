import './UsersList.css';

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import UsersList from './UsersList';
import { fetchUsersAction, fetchUserAction } from '../../api/api';
import Paginator from '../../components/Paginator/Paginator';

class UsersListContainer extends Component {
  static propTypes = {
    error: PropTypes.any,
    users: PropTypes.array.isRequired,
    pending: PropTypes.bool.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };
  componentDidMount() {
    const { users, fetchUsers } = this.props;

    if (users.length === 0) fetchUsers();
  }
  userClickHandle = userName => {
    const { setCurrentUser, history } = this.props;

    setCurrentUser(userName).then(res => {
      history.push(`/user/${userName}`);
    });
  };
  render() {
    const { users, error, pending } = this.props;

    return (
      <Fragment>
        {users.length > 0 && <Paginator />}
        {pending ? (
          <LoadingSpinner />
        ) : (
          <div className="users-list__container">
            {error ? (
              <span className="users-list-error">Some troubles</span>
            ) : (
              <UsersList users={users} setCurrentUser={this.userClickHandle} />
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { fetchStatus, users } = state.users;
  const { pending, error } = fetchStatus.users;
  return {
    error,
    users,
    pending
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsersAction()),
    setCurrentUser: userName => dispatch(fetchUserAction(userName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
