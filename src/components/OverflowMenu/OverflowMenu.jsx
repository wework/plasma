import cx from 'classnames';
import _ from 'lodash';
import React from 'react';

import Base from '../Base.jsx';
import OverflowMenuItem from './OverflowMenuItem.jsx';

import style from './style.scss';

const direction = { RIGHT: 'right', LEFT: 'left' };

class OverflowMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      revealed: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ revealed: true });
  }

  handleMouseLeave() {
    this.setState({ revealed: false });
  }

  render() {
    const revealableStyle = cx(style.revealable, {
      [style.revealed]: this.state.revealed,
    });
    const revealableListStyle = cx(style.revealableList, {
      [style.openLeft]: this.props.openDirection &&
        this.props.openDirection === direction.LEFT,
    });
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={style.container}
      >
        <div
          ref={(c) => { this.title = c; }}
          className={style.action}
        >
          <div className={style.overflow} />
        </div>
        <div
          ref={(c) => { this.revealable = c; }}
          className={revealableStyle}
        >
          <div className={style.revealableTopWrapper}>
            <div
              className={style.revealableTop}
            >
              <div className={style.overflow} />
            </div>
          </div>
          <ol className={revealableListStyle}>
            { _.map(this.props.options, (option) => {
              return (
                <OverflowMenuItem
                  key={option.key}
                  optionKey={option.key}
                  text={option.text}
                  onClick={this.props.onClick}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

OverflowMenu.defaultProps = {
  options: {},
  openDirection: direction.RIGHT,
};

OverflowMenu.propTypes = {
  options: React.PropTypes.array,
  onClick: React.PropTypes.func,
  openDirection: React.PropTypes.oneOf([direction.LEFT, direction.RIGHT]),
};

OverflowMenu.displayName = 'OverflowMenu';

export default Base(OverflowMenu);
