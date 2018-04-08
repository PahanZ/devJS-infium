import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'antd';

const Header = props => (
  <header>
    <Divider type="vertical"/>
    <h1 className="tittle">
      {(props.location.pathname === '/') ? 'Invoices' : 'Create invoice'}
    </h1>
    <Divider/>
  </header>
);

Header.propTypes = {
  location: PropTypes.object
};

export default Header;

