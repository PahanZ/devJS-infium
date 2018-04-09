import React from 'react';
import {connect} from 'react-redux';
import {getInvoices} from '../redux/actions';
import PropTypes from 'prop-types';
import Actions from '../Components/Actions';
import Invoices from '../Components/Invoices';
import {columns, dataFoTabble} from '../data/dataFoTabble';

class Page1 extends React.Component {
  componentDidMount() {
    this.props.getInvoices(dataFoTabble);
  }
  render() {
    return (
      <main>
        <Actions/>
        <Invoices tableTittles={columns} invoicesList={dataFoTabble}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.getInvoices
});

const mapDispatchToProps = {
  getInvoices
};

Page1.propTypes = {
  getInvoices: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);

