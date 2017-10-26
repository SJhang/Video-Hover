import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './app';

const Root = (props) => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <App/>
      </Switch>
    </Router>
  )
}

export default Root
