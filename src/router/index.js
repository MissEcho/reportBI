import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home/index';
import Analysis from '@/pages/Analysis/index';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/analysis" component={Analysis} />
  </Switch>
);

export default Router;
