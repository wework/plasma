import React from 'react';
import PropTypes from 'prop-types';

const withCounter = Component => {
  return class extends React.Component {
    static propTypes = {
      value: PropTypes.string,
      counterStyle: PropTypes.object,
      maxLength: PropTypes.string,
    };

    render() {
      return (
        <div>
          <div className={this.props.counterStyle}>
            {this.props.value ? this.props.value.length : 0}
            {this.props.maxLength && `/${this.props.maxLength}`} characters
          </div>
          <Component {...this.props} />
        </div>
      );
    }
  };
};

export default withCounter;
