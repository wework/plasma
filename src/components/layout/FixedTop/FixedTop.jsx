import React from 'react';

import Base from '../../Base.jsx';
import style from './style.scss';

class FixedTop extends React.Component {

  constructor() {
    super();
    this.state = {
      fixedHeight: 0,
    };
  }

  componentDidMount() {
    this.setState({ fixedHeight: this.fixed.offsetHeight });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div
          className={style.fixedWrapper}
          ref={(c) => (this.fixed = c)}
        >
          { this.props.children[0] }
        </div>
        <div className={style.contentWrapper}>
          <div
            className={style.stub}
            style={{ height: this.state.fixedHeight, minHeight: this.state.fixedHeight }}
          />
          <div className={style.content}>
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedTop.defaultProps = {
  children: ['', ''],
};

FixedTop.propTypes = {
  children: React.PropTypes.array.isRequired,
};

FixedTop.displayName = '!FixedTop';

export default Base(FixedTop);
