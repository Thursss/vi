import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Game from './pages/game/Game';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Game">
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
