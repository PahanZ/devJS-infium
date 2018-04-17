import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editInvoice, redirect} from '../redux/actions';
import Form from '../Components/Form';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isRedirect !== nextProps) {
      this.props.router.push('/');
    }
  }
  handleSubmit({key, Create, No, Supply, Comment}) {
    const newInvoice = {key, Create, No, Supply, Comment};
    this.props.invoices.map((element, i) => {
      if (element.key === key) {
        return this.props.invoices.splice(i, 1, newInvoice);
      }
      return element;
    });
    this.props.editInvoice(this.props.invoices);
    this.props.redirect(true);
  }
  render() {
    // console.log(this.props.invoices);
    return (
      <Form
        values={this.props.invoice}
        inputsAtributes={this.state}
        onSubmit={this.handleSubmit}
        />
    );
  }
}

Page3.propTypes = {
  redirect: PropTypes.func,
  invoice: PropTypes.object,
  isRedirect: PropTypes.bool,
  router: PropTypes.object,
  invoices: PropTypes.array,
  editInvoice: PropTypes.func
};

const mapStateToProps = state => ({
  invoice: state.getCurrInvoice,
  isRedirect: state.redirect,
  invoices: state.getInvoices
});

const mapDispatchToProps = {
  editInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
