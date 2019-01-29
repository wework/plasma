// @flow
import React from 'react';
import ExternalDatePicker from 'react-datepicker';

type Props = ExternalDatePicker.propTypes;

class DatePicker extends React.Component<Props> {
  static defaultProps = ExternalDatePicker.defaultProps;

  render() {
    return <ExternalDatePicker {...this.props} />;
  }
}

DatePicker.displayName = 'DatePicker';

export default DatePicker;
