import React from 'react';
import {connect} from 'react-redux';
import {getInvoices, redirect, removeInvoice, getCurrInvoice} from '../redux/actions';
import PropTypes from 'prop-types';
import Actions from '../Components/Actions';
import Invoices from '../Components/Invoices';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.removeInvoice = this.removeInvoice.bind(this);
    this.editInvoice = this.editInvoice.bind(this);
  }
  componentDidMount() {
    this.props.redirect(false);
    this.props.getInvoices(this.props.invoices);
  }
  removeInvoice(invoices, No, e) {
    const tdValue = e.target.closest('tr').children[1].textContent;
    const newInvoices = invoices.filter(element => String(element[No]) !== tdValue);
    this.props.removeInvoice(newInvoices);
  }
  editInvoice(invoices, No, e) {
    const tdValue = e.target.closest('tr').children[1].textContent;
    invoices.forEach(element => {
      if (String(element[No]) === tdValue) {
        this.props.getCurrInvoice(element);
      }
    });
  }
  render() {
    console.log(this.props.invoice);
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
  getInvoices: PropTypes.func,
  invoices: PropTypes.array,
  removeInvoice: PropTypes.func,
  getCurrInvoice: PropTypes.func,
  redirect: PropTypes.func,
  invoice: PropTypes.object
};

const mapStateToProps = state => ({
  invoices: state.getInvoices,
  invoice: state.getCurrInvoice
});

const mapDispatchToProps = {
  getInvoices,
  removeInvoice,
  getCurrInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);

