import invoicesInfo from './db.json';

const data = {};

invoicesInfo.invoices.forEach(el => {
  data[el.id] = el;
  data[el.id].create = el.date_created;
  data[el.id].no = el.number;
  data[el.id].supply = el.date_supply;
  delete el.date_created;
  delete el.number;
  delete el.date_supply;
});

export default data;
