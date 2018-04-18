const getInvoices = data => ({
  type: 'getInvoices',
  payload: data
});

const addInvoice = (invoicer, id) => ({
  type: 'addInvoice',
  payload: invoicer,
  payload2: id
});

const removeInvoice = data => ({
  type: 'removeInvoice',
  payload: data
});

const editInvoice = (invoicer, id) => ({
  type: 'editInvoice',
  payload: invoicer,
  payload2: id
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
