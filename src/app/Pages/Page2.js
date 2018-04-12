import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice, redirect} from '../redux/actions';
import moment from 'moment';
import Form from '../Components/Form';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random().toString(36).replace('.', ''),
      Create: null,
      No: 'INV',
      Supply: null,
      Comment: ''
    };
    this.checkStyleBtn = 'primary';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isRedirect !== nextProps) {
      this.props.router.push('/');
    }
  }
  correctDate(date) {
    return (date === null) ? '' : moment(date._d).format('Do MMMM YYYY');
  }
  handleSubmit(e) {
    e.preventDefault();
    const invoice = Object.assign({}, this.state, {
      Create: this.correctDate(this.state.Create),
      Supply: this.correctDate(this.state.Supply)
    });
    if (invoice.Create === '' ||
        invoice.Supply === '' ||
        invoice.No.length === 0) {
      this.checkStyleBtn = 'danger';
      this.forceUpdate();
      return;
    }
    this.props.addInvoice(invoice);
    this.props.redirect(true);
  }
  handleChange(objName, e) {
    const newValue = (e.target) ? e.target.value : e;
    this.setState({[objName]: newValue});
    this.checkStyleBtn = 'primary';
  }
  render() {
    // console.log(this.checkStyleBtn);
    return (
      <Form
        inputsAtributes={this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        checkStyleBtn={this.checkStyleBtn}
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
