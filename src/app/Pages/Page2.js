import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice, redirect} from '../redux/actions';
import Form from '../Components/Form';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeBnt: 'primary',
      textBtn: 'Save'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.btnStyleChange = this.btnStyleChange.bind(this);
  }
  btnStyleChange() {
    this.setState({typeBnt: 'primary', textBtn: 'Save'});
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isRedirect !== nextProps) {
      this.props.router.push('/');
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const invoiceData = {
      Create: form.elements[1].value,
      No: form.elements[0].value,
      Supply: form.elements[2].value,
      Comment: form.elements[3].value
    };
    if (Object.values(invoiceData).some(el => el === '')) {
      this.setState({typeBnt: 'danger', textBtn: 'Fill the filds'});
      return;
    }
    invoiceData.key = Math.random().toString(36).replace('.', '');
    this.props.addInvoice(invoiceData);
    this.props.redirect(true);
  }
  render() {
    // console.log(this.checkStyleBtn);
    return (
      <Form
        inputsAtributes={this.state}
        onSubmit={this.handleSubmit}
        checkStyleBtn={this.state}
        handleChange={this.btnStyleChange}
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
  isRedirect: state.redirect
});

const mapDispatchToProps = {
  addInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
