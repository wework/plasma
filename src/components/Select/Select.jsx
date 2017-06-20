import React from 'react';
import ExternalSelect from 'react-select';
import Base from '../Base.jsx';

class Select extends React.Component {
  render() {
    return (
      <ExternalSelect {...this.props} />
    );
  }
}

export default Base(Select);
