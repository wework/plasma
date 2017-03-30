import cx from 'classnames';
import React from 'react';

import Base from '../Base.jsx';
import Loader from '../Loader/Loader.jsx';
import style from './style.scss';

/**
  * Rules
  * - Text on buttons should always use the Bold 5 text style.
  * - Text on active buttons is always WeWork Black color.
  * - Button height is 38px (40px including top/bottom border of 1px).
  * - No icons on primary, secondary or tertiary style buttons.
  * - Icons can be used in link style buttons, where applicable.
  *
  *  Spacing
  *  - Buttons have left/right padding of 20px (except for link buttons, which have no padding).
  *  - Buttons contained in narrow spaces (e.g. filters) should fill 100% of the width available to them. This helps with cleaner alignment with other elements in that column, and also aligns multiple buttons when stacked.
  *  - If multiple buttons are horizontally aligned, there should be a 20px margin separating them.
  *  - If multiple buttons are stacked vertically, there should be a 10px margin separating them.
 */

const type = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };

class Button extends React.Component {

  render() {
    const buttonStyle = cx(style.button, {
      [style.primary]: this.props.type === type.PRIMARY,
      [style.secondary]: this.props.type === type.SECONDARY,
      [style.tertiary]: this.props.type === type.TERTIARY,
      [style.loading]: this.props.loading,
      [style.disabled]: this.props.disabled,
    });

    let loaderDotStyle;
    if (
      this.props.type === type.SECONDARY ||
      this.props.type === type.TERTIARY
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
