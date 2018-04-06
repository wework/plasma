import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.scss'

const withCounter = Component => {
  return class extends React.Component {
    static propTypes = {
      value: PropTypes.string,
      counterStyle: PropTypes.object,
      maxLength: PropTypes.string,
    };

    render() {
      const wrapperStyle = cx(style.wrapper, {
        [this.props.counterStyle]: this.props.counterStyle,
      });
      return (
        <div>
          <div className={wrapperStyle}>
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
