import React from 'react';
import moment from 'moment';
import Form from '../Components/Form';

export default class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: {name: 'number', value: 'INV '},
      invoiceDate: {name: 'invoiceDate', value: moment()},
      supplyDate: {name: 'supplyDate', value: moment()},
      comment: {name: 'comment', value: ''}
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(objName, e) {
    const newValue = (e.target) ? e.target.value : e;
    this.setState({[objName]: {name: objName, value: newValue}});
  }
  render() {
    return (
      <Form inputsAtributes={this.state} onChange={this.handleChange}/>
    );
  }
}
