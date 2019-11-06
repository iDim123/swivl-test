import './UserProfile.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUserAction } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const UserProfile = ({ user = null, setCurrentUser }) => {
  const { username } = useParams();

  useEffect(() => {
    if (user === null) setCurrentUser(username);
  });

  if (user === null) return <LoadingSpinner />;
  return (
    <div className="user-profile__container">
      <img src={user.avatar_url} alt="avatar_url" />
      <ul>
        <UserField field={user.name}>Name:</UserField>
        <UserField field={user.followers}>Followers:</UserField>
        <UserField field={user.following}>Following:</UserField>
        <UserField field={user.created_at}>Created:</UserField>
        <UserField field={user.email}>Email:</UserField>
        <UserField field={user.location}>Location:</UserField>
        <UserField field={user.blog} link>
          {' '}
          Blog:
        </UserField>
        <UserField field={user.bio}>Bio:</UserField>
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: username => dispatch(fetchUserAction(username))
  };
};

UserProfile.propType = {
  user: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);



function UserField({ field, children, link }) {
  if (field === null) return null;
  if (link)
    return (
      <li>
        <span className="text-bold">{children}</span>
        {` `}
        <a href={field} target="_blank" rel="noopener noreferrer">
          {field}
        </a>
      </li>
    );
  return (
    <li>
      <span className="text-bold">{children}</span>
      {` ${field}`}
    </li>
  );
}
