import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';

const Invoices = props => {
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
      render: () => <Button
        type="primary"
        onClick={function () {
          // props.removeInvoice();
        }}
        >Remove</Button>
    }
  ];
  return (
    <section className="invoices">
      <h2>Invoices</h2>
      <Table columns={columns} dataSource={props.invoicesList}/>
    </section>
  );
};

Invoices.propTypes = {
  invoicesList: PropTypes.array
  // removeInvoice: PropTypes.func
};

export default Invoices;
