import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice} from '../redux/actions';
import Form from '../Components/Form';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Create: {name: 'Create', value: moment()},
      No: {name: 'No', value: 'INV '},
      Supply: {name: 'Supply', value: moment()},
      Comment: {name: 'Comment', value: ''}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.addInvoice(this.state);
  }
  handleChange(objName, e) {
    const newValue = (e.target) ? e.target.value : e;
    this.setState({[objName]: {name: objName, value: newValue}});
  }
  render() {
    console.log(this.props.invoices);
    return (
      <Form inputsAtributes={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    );
  }
}

Page2.propTypes = {
  addInvoice: PropTypes.func,
  invoices: PropTypes.obj
};

const mapStateToProps = state => ({
  invoices: state
});

const mapDispatchToProps = dispatch => ({
  addInvoice: newInvoice => {
    dispatch(addInvoice(newInvoice));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
