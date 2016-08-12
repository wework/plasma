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

class Button extends React.Component {

  /**
  * This is the __whatup__ method
  */
  whatupGirl(name, gender) {
    console.log(`What's up ${name}?`);
  }

  render() {

    let buttonStyle = cx(style.button, {
      [style.secondary]: this.props.secondary,
      [style.disabled]: this.props.disabled
    });

    return (
      <div
        className={ cx(style.button, buttonStyle) }
        onClick={ this.props.onClick }
      >
        <div className={ style.label }>{this.props.label}</div>
      </div>
    );
  }
}

Button.defaultProps = {
  label: 'Click it',
  secondary: false,
  disabled: false
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  /**
  * Callback to handle click event
  */
  handleClick: React.PropTypes.func,
  secondary: React.PropTypes.bool,
  disabled: React.PropTypes.bool
}

Button.displayName = 'Atom.Button';

export default Button;
