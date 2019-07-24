// @flow
import React from 'react';
import ExternalSelect from 'react-select';

type Props = {};

class Select extends React.Component<Props> {
  render() {
    return <ExternalSelect {...this.props} />;
  }
}

export default Select;
