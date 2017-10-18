import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const Root = (props) => {
  const history = syncHistoryWithStore(createBrowserHistory(), store);

  return (
    <Provider>
      <Router history={history}>
        <Switch>
          <App></App>
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
