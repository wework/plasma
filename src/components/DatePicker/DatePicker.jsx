import React from 'react';
import ExternalDatePicker from 'react-datepicker';

class DatePicker extends React.Component {
  render() {
    return (
      <ExternalDatePicker {...this.props} />
    );
  }
}

DatePicker.defaultProps = ExternalDatePicker.defaultProps;
DatePicker.propTypes = ExternalDatePicker.propTypes;
DatePicker.displayName = 'DatePicker';

export default DatePicker;
