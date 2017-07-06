import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Base from '../Base.jsx';
import Loader from '../Loader/Loader.jsx';
import style from './style.scss';

const type = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };
const SIZE = { SMALL: 'small' };

class Button extends React.Component {

  render() {
    const buttonStyle = cx(style.button, {
      [style.primary]: this.props.type === type.PRIMARY,
      [style.secondary]: this.props.type === type.SECONDARY,
      [style.tertiary]: this.props.type === type.TERTIARY,
      [style.small]: this.props.size === SIZE.SMALL,
      [style.loading]: this.props.loading,
      [style.disabled]: this.props.disabled,
    });

    let loaderDotStyle;
    if (
      this.props.type === type.SECONDARY
      || this.props.type === type.TERTIARY
    ) {
      loaderDotStyle = { backgroundColor: '#000', opacity: '0.1' };
    }

    let contentComponent;
    if (this.props.loading) {
      contentComponent = <Loader dotStyle={loaderDotStyle} />;
    } else {
      contentComponent = this.props.label || this.props.children;
    }

    let buttonType = 'button';
    if (this.props.isSubmit) {
      buttonType = 'submit';
    }

    return (
      <button
        className={buttonStyle}
        style={this.props.style}
        onClick={this.props.onClick}
        type={buttonType}
      >
        {contentComponent}
      </button>
    );
  }
}

Button.defaultProps = {
  type: type.PRIMARY,
  disabled: false,
  loading: false,
};

Button.propTypes = {
  label: PropTypes.string,
  /**
  * Callback to handle click event
  */
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  isSubmit: PropTypes.bool,
  size: PropTypes.string,
};

Button.displayName = 'Button';

export default Base(Button);
