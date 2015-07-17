import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App1</h1>
        <Link to="todo1">Todo</Link>
        <RouteHandler />
      </div>
    );
  }
});

const TODO = React.createClass({
  render() {
    return (
      <h1>TODO1!!!!</h1>
    );
  }
});

// declare our routes and their hierarchy
const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="todo1" path="todo" handler={TODO} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById('container'));
});
