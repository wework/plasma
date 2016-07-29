import React from 'react';
import style from './style.scss';

/**
  * The fixed left page is great.
 */

class FixedLeft extends React.Component {
  render() {
    return (
      <div className={ style.wrapper }>
        <div className={ style.fixedWrapper }>
          { this.props.children[0] }
        </div>
        <div className={ style.content }>
          { this.props.children[1] }
        </div>
      </div>
    );
  }
}

FixedLeft.defaultProps = {
  children: ['', '']
}

FixedLeft.propTypes = {
  children: React.PropTypes.array.isRequired
}

FixedLeft.displayName = '!Page.FixedLeft';

export default FixedLeft;