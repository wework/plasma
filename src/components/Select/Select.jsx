import React from 'react';
import ExternalSelect from 'react-select';

class Select extends React.Component {
  render() {
    return (
      <ExternalSelect {...this.props} />
    );
  }
}

export default Select;
