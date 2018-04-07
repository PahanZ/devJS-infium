import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'antd';

const Header = () => {
  // const render = () => (props.location) ? 'Invoices' : 'other';
  return (
    <header>
      <Divider type="vertical"/>
      <h1 className="tittle">Invoices</h1>
      <Divider/>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.string
};

export default Header;

