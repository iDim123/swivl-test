import React from 'react';
import PropTypes from 'prop-types';

const UsersList = ({ users, setCurrentUser }) => {
  return (
    <ul className="users-list">
      {users.map(user => {
        return (
          <li key={user.id} onClick={() => setCurrentUser(user.login)}>
            <img className="user-avatar" src={user.avatar_url} alt="avatar" />
            <span className="user-login">{user.login}</span>
            <a href={user.html_url} className="user-profile-link">
              profile
            </a>
          </li>
        );
      })}
    </ul>
  );
};
UsersList.propType = {
  users: PropTypes.array.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

export default UsersList;
