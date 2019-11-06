import './Paginator.css';

import React from 'react';
import * as R from 'ramda';
import cls from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersAction } from '../../api/api';
import {
  addPrevPageAction,
  removePrevPageAction,
  resetPrevPagesAction
} from '../../redusers/paginator';

const Paginator = ({ goToPrevPage, goToNextPage, goToFirstPage, prevPagesUrl }) => {
  const isFirstPage = prevPagesUrl.length === 0;
  return (
    <ul className="pagination__container">
      <li
        className={cls('page-item', { active: isFirstPage })}
        onClick={() => {
          !isFirstPage && goToFirstPage();
        }}
      >
        <span className="page-link">First</span>
      </li>
      {prevPagesUrl.length > 0 && (
        <li className="page-item" onClick={() => goToPrevPage()}>
          <span className="page-link">Prev</span>
        </li>
      )}
      <li className="page-item" onClick={() => goToNextPage()}>
        <span className="page-link">Next</span>
      </li>
    </ul>
  );
};
const mapStateToProps = state => {
  const { nextPageUrl, prevPagesUrl } = state.paginator;
  return {
    nextPageUrl,
    prevPagesUrl
  };
};

const mergeProps = (state, dispatchProps) => {
  const { nextPageUrl, prevPagesUrl } = state;
  const { dispatch } = dispatchProps;
  return {
    prevPagesUrl,
    goToFirstPage: () => {
      dispatch(resetPrevPagesAction());
      dispatch(fetchUsersAction());
    },
    goToNextPage: () => {
      dispatch(addPrevPageAction());
      dispatch(fetchUsersAction(nextPageUrl));
    },
    goToPrevPage: () => {
      dispatch(removePrevPageAction());
      dispatch(fetchUsersAction(R.last(prevPagesUrl)));
    }
  };
};

Paginator.propType = {
  prevPagesUrl: PropTypes.array.isRequired,
  goToFirstPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPrevPage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Paginator);
