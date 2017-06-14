import React from 'react';
import select from 'react-select';

import Base from '../Base.jsx';

class Select extends React.Component {
  render() {
    return (
      <select {...this.props} />
    );
  }
}

export default Base(Select);
