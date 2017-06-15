import cx from 'classnames';
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenuOption from './DropDownMenuOption.jsx';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class DropDownMenu extends React.Component {

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
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={style.container}
        {...getDataAttrs(this.props.data)}
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
            { _.map(this.props.options, (option) => {
              return (
                <DropDownMenuOption
                  key={option.key}
                  optionKey={option.key}
                  text={option.text}
                  onClick={(optionKey) => {
                    if (option.onClick) {
                      option.onClick(optionKey);
                    }
                  }}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

DropDownMenu.defaultProps = {
  options: {},
};

DropDownMenu.propTypes = {
  options: React.PropTypes.array,
  data: PropTypes.obj,
};

DropDownMenu.displayName = 'DrowpDownMenu';

export default DropDownMenu;
