import React from 'react';
import Header from './Components/Header';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getInvoices} from './redux/actions';
import 'antd/dist/antd.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getInvoices();
  }
  render() {
    const {children, location} = this.props;
    return (
      <div>
        <Header location={location}/>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  getInvoices: PropTypes.func
};

const mapDispatchToProps = {
  getInvoices
};

export default connect(null, mapDispatchToProps)(App);
