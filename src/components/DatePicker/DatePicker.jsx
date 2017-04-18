import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import Base from '../Base.jsx';

import moment from 'moment';
import _DatePicker from 'react-datepicker';
const styles = require('../../external/reactdatepicker.scss');

class DatePicker extends React.Component {
  render() {
    console.log(styles);
    const props = Object.assign({}, this.props, { style: styles });
    return (
      <_DatePicker {...props} />
    );
  }
}

DatePicker.defaultProps = {};

DatePicker.propTypes = {};

DatePicker.displayName = 'DatePicker';

export default Base(DatePicker);
