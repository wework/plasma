import React from 'react';
import style from './style.scss';

class Card extends React.Component {
  render() {
    return (
      <div className={style.card} style={this.props.style}>
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
};

Card.displayName = 'Card';

export default Card;
