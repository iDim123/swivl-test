import './App.css';

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Task from '../Task/Task';
import UsersListCon from '../UsersList/UsersListCon';
import UserProfile from '../UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Task} />
          <Route path="/users" component={UsersListCon} />
          <Route path="/user/:username" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
