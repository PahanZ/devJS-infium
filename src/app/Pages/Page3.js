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
  handleSubmit({id, create, no, supply, comment}) {
    const newInvoice = {id, create, no, supply, comment};
    this.props.editInvoice(newInvoice);
    this.props.redirect(true);
  }
  render() {
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
