var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));

app.listen(port);

var React = require('react')
var Router = require('react-router')
var routes = require('./routes')

app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes})
  router.run(function(Handler, state) {
    var html = React.renderToString(<Handler/>)
    return res.render('react_page', {html: html})
  })
})
console.log('Server running on port', port);
