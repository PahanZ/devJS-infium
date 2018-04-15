import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'antd';

const Header = props => {
  let tittle;
  switch (props.location.pathname) {
    case '/':
      tittle = 'Invoices';
      break;
    case '/create':
      tittle = 'Create invoice';
      break;
    case '/edit':
      tittle = 'Edit invoice';
      break;
    default:
      tittle = 'Not found';
      break;
  }
  return (
    <header>
      <Divider type="vertical"/>
      <h1 className="tittle">
        {tittle}
      </h1>
      <Divider/>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.object
};

export default Header;

