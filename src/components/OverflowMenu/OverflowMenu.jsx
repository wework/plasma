import cx from 'classnames';
import { map } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import OverflowMenuItem from './OverflowMenuItem.jsx';

import style from './style.scss';

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
    return (
      <div
        {...getDataAttrs(this.props)}
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
          <ol className={style.revealableList}>
            { map(this.props.options, (option) => {
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
};

OverflowMenu.propTypes = {
  options: React.PropTypes.array,
  onClick: React.PropTypes.func,
  data: PropTypes.object,
};

OverflowMenu.displayName = 'Plasma@OverflowMenu';

export default OverflowMenu;
