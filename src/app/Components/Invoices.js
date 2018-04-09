import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

const Invoices = props => (
  <section className="invoices">
    <h2>Invoices</h2>
    <Table columns={props.tableTittles} dataSource={props.invoicesList}/>
  </section>
);

Invoices.propTypes = {
  invoicesList: PropTypes.array,
  tableTittles: PropTypes.array
};

export default Invoices;
