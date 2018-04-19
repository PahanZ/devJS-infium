import axios from 'axios';

const getInvoices = () => dispatch => (
  axios.get('http://localhost:3000/invoices')
    .then(responce => {
      return responce.data;
    })
    .then(res => {
      const data = {};
      res.forEach(el => {
        data[el.id] = el;
        data[el.id].create = el.date_created;
        data[el.id].no = el.number;
        data[el.id].supply = el.date_supply;
        delete el.date_created;
        delete el.number;
        delete el.date_supply;
      });
      return data;
    })
    .then(responce => {
      dispatch({
        type: 'getInvoices',
        payload: responce
      });
    })
);

const addInvoice = data => ({
  type: 'addInvoice',
  payload: data
});

const removeInvoice = data => ({
  type: 'removeInvoice',
  payload: data
});

const editInvoice = data => ({
  type: 'editInvoice',
  payload: data
});

const getCurrInvoice = data => ({
  type: 'getCurrInvoice',
  payload: data
});

const redirect = data => ({
  type: 'redirect',
  payload: data
});

export {getInvoices, addInvoice, redirect, removeInvoice, editInvoice, getCurrInvoice};
