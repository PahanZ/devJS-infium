import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router';
export default () => {
  return (
    <section className="actions">
      <h2>Actions</h2>
      <Button type="primary">
        <Link to="/create">Add new</Link>
      </Button>
    </section>
  );
};
