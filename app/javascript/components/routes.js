import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import SignIn from './SignIn';

export default function Routes(props) {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path={['/', '/sign_in']}>
            <SignIn signup_path="/sign_up"/>
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}
