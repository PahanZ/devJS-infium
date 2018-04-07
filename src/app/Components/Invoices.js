import React from 'react';
import {Table} from 'antd';
import {columns, dataFoTabble} from '../data/dataFoTabble';

export default () => {
  return (
    <section className="invoices">
      <h2>Invoices</h2>
      <Table columns={columns} dataSource={dataFoTabble}/>
    </section>
  );
};
