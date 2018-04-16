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
  handleSubmit({key, Create, No, Supply, Comment}) {
    const newInvoice = {key, Create, No, Supply, Comment};
    this.props.addInvoice(newInvoice);
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
  isRedirect: state.redirect
});

const mapDispatchToProps = {
  addInvoice,
  redirect
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
