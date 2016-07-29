import React from 'react';
import style from './style.scss';

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
      </div>
    );
  }
}

ButtonGroup.defaultProps = {
  children: []
};

ButtonGroup.propTypes = {
  children: React.PropTypes.array
}

ButtonGroup.displayName = 'Molecule.ButtonGroup';

export default ButtonGroup;