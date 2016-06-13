var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./features/App');
var Home = require('./features/Home');
var Forecast = require('./features/Forecast');
var ForecastDetail = require('./features/ForecastDetail');

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='forecast/:location' component={Forecast} />
        <Route path='forecast/:location/:day' component={ForecastDetail} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
