import invoicesInfo from './db.json';

export default invoicesInfo.invoices.map(el => ({
  key: el.id,
  Create: el.date_created,
  No: el.number,
  Supply: el.date_supply,
  Comment: el.comment
}));
