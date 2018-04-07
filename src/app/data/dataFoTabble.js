import invoicesInfo from './db.json';

const columns = [
  {
    title: 'Create',
    dataIndex: 'Create',
    key: 'Create'
  },
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No'
  },
  {
    title: 'Supply',
    dataIndex: 'Supply',
    key: 'Supply'
  },
  {
    title: 'Comment',
    dataIndex: 'Comment',
    key: 'Comment'
  }
];

const dataFoTabble = invoicesInfo.invoices.map(el => {
  return ({
    key: el.id,
    Create: el.date_created,
    No: el.number,
    Supply: el.date_supply,
    Comment: el.comment
  });
});

export {columns, dataFoTabble};
