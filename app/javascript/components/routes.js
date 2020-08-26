import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import SignIn from './SignIn';

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/sign_in']}>
          <SignIn signup_path="/sign_up"/>
        </Route>
      </Switch>
    </Router>
  );
}
