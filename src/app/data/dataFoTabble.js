import invoicesInfo from './db.json';

const data = {};

invoicesInfo.invoices.forEach(el => {
  data[el.id] = el;
  data[el.id].Create = el.date_created;
  data[el.id].No = el.number;
  data[el.id].Supply = el.date_supply;
  data[el.id].Comment = el.comment;
  delete el.date_created;
  delete el.number;
  delete el.date_supply;
  delete el.comment;
});

export default data;
