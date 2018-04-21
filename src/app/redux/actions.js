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
        type: 'app/invoices/get',
        payload: responce
      });
    })
);

const addInvoice = data => ({
  type: 'app/invoices/add',
  payload: data
});

const removeInvoice = data => ({
  type: 'app/invoices/remove',
  payload: data
});

const editInvoice = data => ({
  type: 'app/invoices/edit',
  payload: data
});

const getCurrInvoice = data => ({
  type: 'app/invoices/getCurrent',
  payload: data
});

export {getInvoices, addInvoice, removeInvoice, editInvoice, getCurrInvoice};
