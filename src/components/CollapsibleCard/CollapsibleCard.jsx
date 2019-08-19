// @flow
import React, { Component } from 'react';
import cx from 'classnames';

// Components
import Card, { borderColors as styleColors } from '../Card/Card';

// Style
import style from './style.scss';

type Props = {|
  headerText: React$Node,
  collapsibleText: React$Node,
  children: React$Node,
  styleColor: $Values<typeof styleColors>,
  isCollapsed: boolean,
  disabled: boolean,
|};

type State = {|
  shouldDisplayCard: boolean,
|};

class CollapsibleCard extends Component<Props, State> {
  static defaultProps = {
    isCollapsed: false,
  };

  state = {
    shouldDisplayCard: !this.props.isCollapsed,
  };

  onClick = () => {
    this.setState(prevState => ({ shouldDisplayCard: !prevState.shouldDisplayCard }));
  };

  render() {
    const { headerText, collapsibleText, children, styleColor, disabled } = this.props;

    const { shouldDisplayCard } = this.state;

    const collapsibleCardStyle = cx(style.collapsibleCard, {
      [style.styleColorRed]: styleColor === styleColors.RED,
    });

    return (
      <div className={collapsibleCardStyle}>
        <div className={style.cardHeader}>
          {headerText}
          {!disabled && (
            <div className={style.textLink} onClick={this.onClick}>
              {collapsibleText}
              <div
                className={shouldDisplayCard ? style.textLinkArrowUp : style.textLinkArrowDown}
              />
            </div>
          )}
        </div>
        {!disabled && shouldDisplayCard && <Card borderColor={styleColor}>{children}</Card>}
      </div>
    );
  }
}

CollapsibleCard.displayName = 'Plasma@CollapsibleCard';

export default CollapsibleCard;
