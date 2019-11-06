import './Task.css';

import React from 'react';

const Task = () => {
  return (
    <div className="task__container">
      <h1>Hello, my task is:</h1>
      <code>
        github.com has public API to get list of users: "https://api.github.com/users".
        <br />
        <br />
        There are helpfull parameters like "per_page" and "since", check them.
        <br />
        You need to create a single page application, which allows to get list of github users.{' '}
        <br />
        Each row contains login, profile link (html_url) and avatar preview(100x100). <br />
        <br />
        Clicking on row should result in opening new route with bigger avatar version and additional{' '}
        <br />
        user info from "https://api.github.com/users/:username", such as name, followers, following,
        created_at, company, email, location, blog, bio.
        <br />
        <br />
        We expect application will allow to browse at least first 100 users.
        <br />
        <br />
        Using React, ES2015 and Redux is required.
      </code>
    </div>
  );
};

export default Task;
