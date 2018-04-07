import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './app/app';
import Header from './app/Components/Header';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Header/>
    <Route path="/" component={App}/>
    <Route path="/createInvoice" component={App}/>
  </Router>,
  document.getElementById('root')
);
