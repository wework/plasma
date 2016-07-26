import React from 'react';
import style from './style.scss';

class Card extends React.Component {
  render() {
    return (
      <div className={style.card}>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  children: 'Lorem ipsum'
};

Card.displayName = 'Atom.Card';

export default Card;