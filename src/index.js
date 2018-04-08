import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './app/app';
import Invoices from './app/Pages/Page1';
import CreateInvoice from './app/Pages/Page2';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Invoices}/>
      <Route path="/create" component={CreateInvoice}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
