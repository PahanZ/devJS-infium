import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addInvoice, redirect} from '../redux/actions';
import Form from '../Components/Form';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Create: null,
      No: 'INV ',
      Supply: null,
      Comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isRedirect !== nextProps) {
      this.props.router.push('/');
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addInvoice(this.state);
    this.props.redirect(true);
  }
  handleChange(objName, e) {
    const newValue = (e.target) ? e.target.value : e;
    this.setState({[objName]: newValue});
  }
  render() {
    // console.log(this.props);
    return (
      <Form inputsAtributes={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
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
