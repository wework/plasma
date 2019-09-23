// @flow
import cx from 'classnames';
import { map } from 'lodash';
import React from 'react';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import OverflowMenuItem from './OverflowMenuItem';
import style from './style.scss';

const direction = { RIGHT: 'right', LEFT: 'left' };

type Props = {|
  disabled?: boolean,
  options: Array<{| key: string, text: React$Node |}>,
  onClick: string => void,
  openDirection?: $Values<typeof direction>,
  label?: string,
  data?: Data,
|};

type State = {|
  revealed: boolean,
|};

class OverflowMenu extends React.Component<Props, State> {
  static defaultProps = {
    options: [],
    openDirection: direction.RIGHT,
  };

  state = {
    revealed: false,
  };

  handleMouseEnter = (): void => {
    if (!this.props.disabled) {
      this.setState({ revealed: true });
    }
  };

  handleMouseLeave = (): void => {
    this.setState({ revealed: false });
  };

  handleClick = (optionKey: string) => {
    this.setState({ revealed: false });
    this.props.onClick(optionKey);
  };

  renderLabel = (): React$Node => {
    const { label } = this.props;
    if (label) {
      return <div className={style.labelWithText}>{label} &#9662;</div>;
    }

    return <div className={style.overflow} />;
  };

  render() {
    const revealableStyle = cx(style.revealable, {
      [style.revealed]: this.state.revealed,
    });
    const revealableListStyle = cx(style.revealableList, {
      [style.openLeft]: this.props.openDirection && this.props.openDirection === direction.LEFT,
    });
    return (
      <div
        {...getDataAttrs(this.props.data)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={style.container}
      >
        <div className={style.action}>{this.renderLabel()}</div>
        <div className={revealableStyle}>
          <div className={style.revealableTopWrapper}>
            <div className={style.revealableTop}>{this.renderLabel()}</div>
          </div>
          <ol className={revealableListStyle}>
            {map(this.props.options, option => {
              return (
                <OverflowMenuItem
                  key={option.key}
                  optionKey={option.key}
                  text={option.text}
                  onClick={this.handleClick}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

OverflowMenu.displayName = 'Plasma@OverflowMenu';

export default OverflowMenu;
