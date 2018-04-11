import React from 'react';
import {connect} from 'react-redux';
import {getInvoices, redirect} from '../redux/actions';
import PropTypes from 'prop-types';
import Actions from '../Components/Actions';
import Invoices from '../Components/Invoices';
import {columns} from '../data/dataFoTabble';

class Page1 extends React.Component {
  componentDidMount() {
    this.props.redirect(false);
    this.props.getInvoices(this.props.invoices);
  }
  // componentDidUpdate() {
  //   this.props.getInvoices(this.props.invoices);
  // }
  render() {
    console.log(this.props.invoices);
    return (
      <main>
        <Actions/>
        <Invoices tableTittles={columns} invoicesList={this.props.invoices}/>
      </main>
    );
  }
}

Page1.propTypes = {
  getInvoices: PropTypes.func,
  invoices: PropTypes.array,
  redirect: PropTypes.func
};

const mapStateToProps = state => ({
  invoices: state.getInvoices
});

const mapDispatchToProps = {
  getInvoices,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);

