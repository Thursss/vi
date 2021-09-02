import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/app';
import Game from './pages/game';
import DatavReport from './pages/datav-report';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/game" component={Game} />
        <Route path="/data-report" component={DatavReport} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
