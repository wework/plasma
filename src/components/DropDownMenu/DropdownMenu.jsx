import cx from 'classnames';
import _ from 'lodash';
import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class DropdownMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      revealed: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(event) {
    this.setState({ revealed: true });
  }

  handleMouseLeave() {
    console.log('mouseleavedd');
    this.setState({ revealed: false });
  }

  render() {
    const revealableStyle = cx(style.revealable, {
      [style.revealed]: this.state.revealed,
    });
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={style.container}
      >
        <div
          ref={(c) => { this.title = c }}
          className={style.action}
        >
          { this.props.title }
        </div>
        <div
          ref={(c) => { this.revealable = c }}
          className={revealableStyle}
        >
          <div className={style.revealableTopWrapper}>
            <div
              className={style.revealableTop}
            />
          </div>
          <ol className={style.revealableList}>
            <li className={style.revealableListItem}>Option 1</li>
            <li className={style.revealableListItem}>Option 2</li>
            <li className={style.revealableListItem}>Option 4</li>
          </ol>
        </div>
      </div>
    );
  }
}

DropdownMenu.defaultProps = {
  text: 'Option',
  name: 'checkbox',
};

DropdownMenu.propTypes = {
  text: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
};

DropdownMenu.displayName = 'DrowpdownMenu';

export default Base(DropdownMenu);
