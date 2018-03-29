import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import Card, { borderColors as styleColors } from '../Card/Card';

// Style
import style from './style.scss';

class CollapsibleCard extends Component {
  static propTypes = {
    headerText: PropTypes.node.isRequired,
    expandableText: PropTypes.node,
    children: PropTypes.node.isRequired,
    styleColor: PropTypes.oneOf([styleColors.RED]),
    isCollapsed: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    isCollapsed: false,
  }

  state = {
    shouldDisplayCard: !this.props.isCollapsed,
  }

  onClick = () => {
    this.setState(prevState => ({ shouldDisplayCard: !prevState.shouldDisplayCard }));
  }

  render() {
    const {
      headerText,
      expandableText,
      children,
      styleColor,
      disabled,
    } = this.props;

    const {
      shouldDisplayCard,
    } = this.state;

    const collapsibleCardStyle = cx(
      style.collapsibleCard,
      {
        [style.styleColorRed]: styleColor === styleColors.RED,
      }
    );

    return (
      <div className={collapsibleCardStyle}>
        <div className={style.cardHeader}>
          {headerText}
          {!disabled && (
            <div className={style.textLink} onClick={this.onClick}>
              {expandableText}
              <div
                className={shouldDisplayCard ? style.textLinkArrowUp : style.textLinkArrowDown}
              />
            </div>
          )}
        </div>
        {!disabled &&
          shouldDisplayCard && (
            <Card borderColor={styleColor}>
              {children}
            </Card>
        )}
      </div>
    );
  }
}

CollapsibleCard.displayName = 'Plasma@CollapsibleCard';

export default CollapsibleCard;
