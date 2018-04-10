const getInvoices = payload => ({
  type: 'getInvoices',
  payload
});

const addInvoice = payload => ({
  type: 'addInvoice',
  payload
});

export {getInvoices, addInvoice};
