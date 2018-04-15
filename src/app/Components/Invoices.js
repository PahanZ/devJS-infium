import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';
import {Link} from 'react-router';

const Invoices = ({invoicesList, removeInvoice, editInvoice}) => {
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
      title: 'Actions',
      key: 'Actions',
      render: () => {
        return (
          <div className="actionColumn">
            <Button type="primary">
              <Link
                to="/edit"
                onClick={function (e) {
                  editInvoice(invoicesList, columns[1].key, e);
                }}
                >Edit</Link>
            </Button>
            <Button
              type="primary"
              onClick={function (e) {
                removeInvoice(invoicesList, columns[1].key, e);
              }}
              >
            Remove
            </Button>
          </div>);
      }
    }
  ];
  return (
    <section className="invoices">
      <h2>Invoices</h2>
      <Table columns={columns} dataSource={invoicesList}/>
    </section>
  );
};

Invoices.propTypes = {
  invoicesList: PropTypes.array,
  removeInvoice: PropTypes.func,
  editInvoice: PropTypes.func
};

export default Invoices;
