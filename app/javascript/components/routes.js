import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

export default function Routes(props) {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path={['/', '/sign_in']}>
            <SignIn signup_path="/sign_up"/>
          </Route>
          <Route exact path="/dashboards">
            <Dashboard />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}
