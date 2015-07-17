var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// app.use(express.static(__dirname + '/build'));

app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes});

  router.run(function(Handler, state) {
    var html = React.renderToString(<Handler/>);
    return res.render('react_page', {html: html});
  });
});

app.listen(port);
console.log('Server running on port', port);


// // this allows us to require .jsx files
// require('node-jsx').install({ extension: '.jsx' });

// var React = require('react');
// var App = require('./components/Application.jsx');
// var express = require('express');

// var Component = React.createFactory(App);
// var server = express();
// var port = process.env.PORT || 3000;

// // all requests to the server return the html
// server.use(function (req, res, next) {
//     var component = Component();
//     var html = React.renderToString(component);
//     res.send(html);
// });

// server.listen(port, function () {
//     console.log('Listening on port ' + port);
// });