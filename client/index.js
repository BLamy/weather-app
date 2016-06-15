import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './features/App'
import Home from './features/Home'
import Forecast from './features/Forecast'
import ForecastDetail from './features/ForecastDetail'

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
)
