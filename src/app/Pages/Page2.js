import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice, redirect} from '../redux/actions';
import Form from '../Components/Form';

class Page2 extends React.Component {
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
    this.props.addInvoice(newInvoice, newInvoice.id);
    this.props.redirect(true);
  }
  render() {
    return (
      <Form
        inputsAtributes={this.state}
        onSubmit={this.handleSubmit}
        />
    );
  }
}

Page2.propTypes = {
  addInvoice: PropTypes.func,
  redirect: PropTypes.func,
  isRedirect: PropTypes.bool,
  router: PropTypes.object
};

const mapStateToProps = state => ({
  isRedirect: state.redirect,
  invoices: state.getInvoices
});

const mapDispatchToProps = {
  addInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
