import React from 'react';
import Header from './Components/Header';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const App = props => {
  const {children, location} = props;
  return (
    <div>
      <Header location={location}/>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

export default App;
