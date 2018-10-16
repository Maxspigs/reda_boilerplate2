import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from 'app/containers/home';
import { hot } from 'react-hot-loader';
import Register from 'app/components/register';
import Header from 'app/components/header';

export const App = hot(module)(() => (
  <div>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </div>
));
