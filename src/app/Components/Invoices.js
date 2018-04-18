import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';
import {Link} from 'react-router';

const Invoices = ({invoicesList, removeInvoice, editInvoice}) => {
  const columns = [
    {
      title: 'Create',
      dataIndex: 'create'
    },
    {
      title: 'No',
      dataIndex: 'no'
    },
    {
      title: 'Supply',
      dataIndex: 'supply'
    },
    {
      title: 'Comment',
      dataIndex: 'comment'
    },
    {
      title: 'Actions',
      render: row => {
        return (
          <div className="actionColumn">
            <Button type="primary">
              <Link
                to="/edit"
                onClick={function () {
                  editInvoice({row, invoicesList});
                }}
                >Edit</Link>
            </Button>
            <Button
              type="primary"
              onClick={function () {
                removeInvoice(row);
              }}
              >
            Remove
            </Button>
          </div>
        );
      }
    }
  ];
  return (
    <section className="invoices">
      <h2>Invoices</h2>
      <Table
        rowKey={function (invoicesList) {
          return invoicesList.id;
        }}
        columns={columns}
        dataSource={Object.values(invoicesList)}
        />
    </section>
  );
};

Invoices.propTypes = {
  invoicesList: PropTypes.object,
  removeInvoice: PropTypes.func,
  editInvoice: PropTypes.func
};

export default Invoices;
