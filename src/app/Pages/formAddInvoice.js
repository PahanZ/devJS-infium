import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice} from '../redux/actions';
import Form from '../Components/Form';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit({id, create, no, supply, comment}) {
    const newInvoice = {id, create, no, supply, comment};
    this.props.addInvoice(newInvoice);
    this.props.router.push('/');
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
  router: PropTypes.object
};

const mapStateToProps = state => ({
  isRedirect: state.redirect,
  invoices: state.invoices
});

const mapDispatchToProps = {
  addInvoice
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
