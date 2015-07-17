import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Route, RouteHandler } from 'react-router';

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="todo1" path="todo" handler={TODO} />
  </Route>
);

module.exports = [
  <Route path="/" handler={require('./components/App')}>
    {/* ... */}
  </Route>
]