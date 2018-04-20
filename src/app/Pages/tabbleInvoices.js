import React from 'react';
import {connect} from 'react-redux';
import {removeInvoice, getCurrInvoice} from '../redux/actions';
import PropTypes from 'prop-types';
import Actions from '../Components/Actions';
import Invoices from '../Components/Invoices';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.removeInvoice = this.removeInvoice.bind(this);
    this.editInvoice = this.editInvoice.bind(this);
  }
  removeInvoice(row) {
    this.props.removeInvoice(row.id);
  }
  editInvoice({row, invoicesList}) {
    this.props.getCurrInvoice(invoicesList[row.id]);
  }
  render() {
    return (
      <main>
        <Actions/>
        <Invoices
          invoicesList={this.props.invoices}
          removeInvoice={this.removeInvoice}
          editInvoice={this.editInvoice}
          />
      </main>
    );
  }
}

Page1.propTypes = {
  invoices: PropTypes.object,
  removeInvoice: PropTypes.func,
  getCurrInvoice: PropTypes.func
};

const mapStateToProps = state => ({
  invoices: state.invoices
});

const mapDispatchToProps = {
  removeInvoice,
  getCurrInvoice
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);

