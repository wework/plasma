import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class SegmentedCard extends React.Component {
  render() {
    return (
      <div className={style.card} style={this.props.style}>
        <div className={style.first}>
          { this.props.children[0] }
        </div>
        <div className={style.second}>
          { this.props.children[1] }
        </div>
      </div>
    );
  }
}

SegmentedCard.defaultProps = {
  children: ['Side', 'Content'],
  style: {},
};

SegmentedCard.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

SegmentedCard.displayName = 'SegmentedCard';

export default Base(SegmentedCard);
