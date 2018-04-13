import React from 'react';
import {connect} from 'react-redux';
import {getInvoices, redirect, removeInvoice} from '../redux/actions';
import PropTypes from 'prop-types';
import Actions from '../Components/Actions';
import Invoices from '../Components/Invoices';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.removeInvoice = this.removeInvoice.bind(this);
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
  render() {
    return (
      <main>
        <Actions/>
        <Invoices invoicesList={this.props.invoices} removeInvoice={this.removeInvoice}/>
      </main>
    );
  }
}

Page1.propTypes = {
  getInvoices: PropTypes.func,
  invoices: PropTypes.array,
  removeInvoice: PropTypes.func,
  redirect: PropTypes.func
};

const mapStateToProps = state => ({
  invoices: state.getInvoices
});

const mapDispatchToProps = {
  getInvoices,
  removeInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);

