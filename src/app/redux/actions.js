const getInvoices = data => ({
  type: 'getInvoices',
  payload: data
});

const addInvoice = data => ({
  type: 'addInvoice',
  payload: data
});

export {getInvoices, addInvoice};
