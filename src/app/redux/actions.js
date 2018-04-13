const getInvoices = data => ({
  type: 'getInvoices',
  payload: data
});

const addInvoice = data => ({
  type: 'addInvoice',
  payload: data
});

const removeInvoice = data => ({
  type: 'removeInvoice',
  payload: data
});

const redirect = data => ({
  type: 'redirect',
  payload: data
});

export {getInvoices, addInvoice, redirect, removeInvoice};
