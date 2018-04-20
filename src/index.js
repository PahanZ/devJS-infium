import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './app/redux/createStore';
import App from './app/app';
import tabbleInvoices from './app/Pages/tabbleInvoices';
import formAddInvoice from './app/Pages/formAddInvoice';
import formEditInvoice from './app/Pages/formEditInvoice';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={tabbleInvoices}/>
        <Route path="/create" component={formAddInvoice}/>
        <Route path="/edit" component={formEditInvoice}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
