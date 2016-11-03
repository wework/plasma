import cx from 'classnames';
import React from 'react';
import style from './style.scss';

/**
  * - **Primary** (primary action for the view, “Save”)
  * - Secondary (a secondary action, “Cancel”)
  * - Text buttons (can have many within a view, not a primary or secondary action)
  * All buttons should have hover state and active state
  * Buttons can have up to one icon, that should be a visual representation of the label
  * Buttons labels should describe the result of the action (‘verb’)
  * Button labels should not be longer than two words
  * Avoid having more than one primary and secondary action for a view
  * Buttons that result in a long action can replace the label with a loader once it’s clicked
 */

const type = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };

class Button extends React.Component {

  render() {
    const buttonStyle = cx(style.button, {
      [style.primary]: this.props.type === type.PRIMARY,
      [style.secondary]: this.props.type === type.SECONDARY,
      [style.tertiary]: this.props.type === type.TERTIARY,
      [style.disabled]: this.props.disabled,
    });

    return (
      <div
        className={cx(style.button, buttonStyle)}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </div>
    );
  }
}

Button.defaultProps = {
  label: 'Click it',
  type: type.PRIMARY,
  disabled: false,
};

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  /**
  * Callback to handle click event
  */
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};

Button.displayName = 'Button';

export default Button;
