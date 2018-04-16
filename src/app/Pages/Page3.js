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
  handleSubmit(e) {
    e.preventDefault();
    // const form = e.target;
    // const invoiceData = {
    //   Create: form.elements[1].value,
    //   No: form.elements[0].value,
    //   Supply: form.elements[2].value,
    //   Comment: form.elements[3].value
    // };
    // if (Object.values(invoiceData).some(el => el === '')) {
    //   this.setState({typeBnt: 'danger', textBtn: 'Fill the filds'});
    //   return;
    // }
    // invoiceData.key = Math.random().toString(36).replace('.', '');
    // this.props.addInvoice(invoiceData);
    // this.props.redirect(true);
  }
  render() {
    console.log(this.props);
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
  // redirect: PropTypes.func,
  invoice: PropTypes.object,
  isRedirect: PropTypes.bool,
  router: PropTypes.object
};

const mapStateToProps = state => ({
  invoice: state.getCurrInvoice,
  isRedirect: state.redirect
});

const mapDispatchToProps = {
  editInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
