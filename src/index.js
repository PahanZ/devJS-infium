import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './app/redux/createStore';
import App from './app/app';
import Page1 from './app/Pages/Page1';
import Page2 from './app/Pages/Page2';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Page1}/>
        <Route path="/create" component={Page2}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
