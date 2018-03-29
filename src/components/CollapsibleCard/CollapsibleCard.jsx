import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import Card from '../Card/Card';

// Style
import style from './style.scss';

const styleColors = { RED: 'red' };

class CollapsibleCard extends Component {
  state = {
    displayCard: false,
  }

  onClick = () => {
    this.setState({ displayCard: !this.state.displayCard });
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
      displayCard,
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
              <b>{expandableText}</b>
              <div
                className={
                  ((displayCard) ? style.textLinkArrowUp : style.textLinkArrowDown)
                }
              />
            </div>
          )}
        </div>
        {!disabled &&
          displayCard && (
            <Card borderColor={styleColor}>
              {children}
            </Card>
        )}
      </div>
    );
  }
}

CollapsibleCard.defaultProps = {};

CollapsibleCard.propTypes = {
  headerText: PropTypes.node.isRequired,
  expandableText: PropTypes.string,
  children: PropTypes.node.isRequired,
  styleColor: PropTypes.string,
  disabled: PropTypes.bool,
};

CollapsibleCard.displayName = 'Plasma@CollapsibleCard';

export default CollapsibleCard;
