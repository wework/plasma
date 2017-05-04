import React from 'react';
import datePicker from 'react-datepicker';

import Base from '../Base.jsx';

const style = require('../../external/reactdatepicker.scss');

class DatePicker extends React.Component {
  render() {
    const props = Object.assign({}, this.props, { style });
    return (
      <datePicker {...props} />
    );
  }
}

DatePicker.defaultProps = {};

DatePicker.propTypes = {};

DatePicker.displayName = 'DatePicker';

export default Base(DatePicker);
