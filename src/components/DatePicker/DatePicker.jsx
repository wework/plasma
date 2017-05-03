import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../Base.jsx';

import moment from 'moment';
import _DatePicker from 'react-datepicker';
const style = require('../../external/reactdatepicker.scss');

class DatePicker extends React.Component {
  render() {
    const props = Object.assign({}, this.props, { style });
    return (
      <_DatePicker {...props} />
    );
  }
}

DatePicker.defaultProps = {};

DatePicker.propTypes = {};

DatePicker.displayName = 'DatePicker';

export default Base(DatePicker);
