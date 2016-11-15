import cx from 'classnames';
import React from 'react';
import style from './style.scss';

const type = { CONDENSED: 'condensed' };

class Card extends React.Component {
  render() {
    const cardStyle = cx(style.card, {
      [style.condensed]: this.props.type === type.CONDENSED,
    });

    return (
      <div className={cardStyle} style={this.props.style}>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  children: 'Lorem ipsum',
  style: {},
};

Card.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
  type: React.PropTypes.string,
};

Card.displayName = 'Card';

export default Card;
