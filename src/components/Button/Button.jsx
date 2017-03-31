import cx from 'classnames';
import React from 'react';

import Base from '../Base.jsx';
import Loader from '../Loader/Loader.jsx';
import style from './style.scss';

const type = { PRIMARY: 'primary', SECONDARY: 'secondary' };
// const type = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };

class Button extends React.Component {

  render() {
    const buttonStyle = cx(style.button, {
      [style.primary]: this.props.type === type.PRIMARY,
      [style.secondary]: this.props.type === type.SECONDARY,
      // [style.tertiary]: this.props.type === type.TERTIARY,
      [style.loading]: this.props.loading,
      [style.disabled]: this.props.disabled,
    });

    let loaderDotStyle;
    if (
      this.props.type === type.SECONDARY
      // || this.props.type === type.TERTIARY
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
        className={cx(buttonStyle)}
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
  label: React.PropTypes.string,
  /**
  * Callback to handle click event
  */
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  isSubmit: React.PropTypes.bool,
};

Button.displayName = 'Button';

export default Base(Button);
