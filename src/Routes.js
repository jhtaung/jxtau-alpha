import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard, Layout, NotFound } from './views';

const Routes = () => {
  const getPath = path => process.env.PUBLIC_URL + path;
  return (
    <Router>
      <Switch>
        <Route exact path={getPath('/')}><Layout content={<Dashboard />} /></Route>
        <Route exact path={getPath('/dashboard')}><Layout content={<Dashboard />} /></Route>

        <Route exact path={getPath('/not-found')}><Layout content={<NotFound />} /></Route>
        <Redirect to={getPath('/not-found')} />
      </Switch>
    </Router>
  );
};

export default Routes;
