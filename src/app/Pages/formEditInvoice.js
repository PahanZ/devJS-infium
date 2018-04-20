import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editInvoice} from '../redux/actions';
import Form from '../Components/Form';

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit({id, create, no, supply, comment}) {
    const newInvoice = {id, create, no, supply, comment};
    this.props.editInvoice(newInvoice);
    this.props.router.push('/');
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
  invoice: PropTypes.object,
  router: PropTypes.object,
  editInvoice: PropTypes.func
};

const mapStateToProps = state => ({
  invoice: state.currInvoice,
  isRedirect: state.redirect,
  invoices: state.invoices
});

const mapDispatchToProps = {
  editInvoice
  // redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
