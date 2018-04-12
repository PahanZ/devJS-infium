import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';

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
  },
  {
    title: 'Edit',
    key: 'Edit',
    render: () => <Button type="primary">Edit</Button>
  },
  {
    title: 'Remove',
    key: 'Remove',
    render: () => <Button type="primary">Remove</Button>
  }
];

const Invoices = props => {
  console.log(props.tableTittles);
  return (
    <section className="invoices">
      <h2>Invoices</h2>
      <Table columns={columns} dataSource={props.invoicesList}/>
    </section>
  );
};

Invoices.propTypes = {
  invoicesList: PropTypes.array,
  tableTittles: PropTypes.array
};

export {Invoices};
