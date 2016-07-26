import React from 'react';
import style from './style.scss';

/**
  * • Primary (primary action for the view, “Save”)
  * • Secondary (a secondary action, “Cancel”)
  * • Text buttons (can have many within a view, not a primary or secondary action)
  * • All buttons should have hover state and active state
  * • Buttons can have up to one icon, that should be a visual representation of the label
  * • Buttons labels should describe the result of the action (‘verb’)
  * • Button labels should not be longer than two words
  * • Avoid having more than one primary and secondary action for a view
  * • Buttons that result in a long action can replace the label with a loader once it’s clicked
 */

class Button extends React.Component {

  /**
  * This is the whatup method
  */
  whatup(name, gender) {

  }

  render() {
    return (
      <div className={style.button} onClick={ this.props.handleClick }>
        {this.props.label}
      </div>
    );
  }
}

Button.defaultProps = {
  label: 'Forget it'
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  /**
  * Callback to handle click event
  */
  handleClick: React.PropTypes.func
}

Button.displayName = 'Atom.Button';

export default Button;