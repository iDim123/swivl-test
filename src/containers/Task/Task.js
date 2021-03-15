import './Task.css';

import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';

const Task = () => {
  const [number, setNumber] = useState(1);
  const [switcher, setSwitcher] = useState(false);

  // const memoA = { color: 'red' };
  // const memoA = useMemo(() => ({ color: switcher ? 'red' : 'blue' }), [switcher]);
  const memoA = useCallback(() => ({ color: switcher ? 'red' : 'blue' }), [switcher]);

  useEffect(() => {
    console.log('swithcsr ch');
  }, [memoA]);

  function long(number, calc) {
    console.log('long');
    let i = 0;
    while (i < 1000000000) i++;
    return number * 2 + calc(number);
  }
  const calc = (num) => num;

  const memoCalc = useCallback(() => {
    return calc(number);
  }, [number]);

  const res = useMemo(() => {
    return long(number, memoCalc);
  }, [number, memoCalc]);

  console.log(res, switcher);
  return (
    <Fragment>
      <div>
        <h1>{res}</h1>
        <h1>{String(switcher)}</h1>
        <button onClick={() => setNumber((prev) => prev + 1)}>Numbsers</button>
        <button onClick={() => setSwitcher((prev) => !prev)}>Switcher</button>
      </div>
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
          Clicking on row should result in opening new route with bigger avatar version and
          additional <br />
          user info from "https://api.github.com/users/:username", such as name, followers,
          following, created_at, company, email, location, blog, bio.
          <br />
          <br />
          We expect application will allow to browse at least first 100 users.
          <br />
          <br />
          Using React, ES2015 and Redux is required.
        </code>
      </div>
    </Fragment>
  );
};

export default Task;
