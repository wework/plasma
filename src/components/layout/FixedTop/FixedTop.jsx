import React from 'react';
import PropTypes from 'prop-types';
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
        <div
          className={style.contentWrapper}
          style={{ backgroundColor: this.props.contentBackgroundColor }}
        >
          <div
            className={style.stub}
            style={{ height: this.state.fixedHeight, minHeight: this.state.fixedHeight }}
          />
          <div
            className={style.content}
            style={{
              width: '100%',
              maxWidth: this.props.contentMaxWidth
            }}
          >
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedTop.defaultProps = {
  children: ['', ''],
  contentBackgroundColor: 'transparent',
  contentMaxWidth: 'none',
};

FixedTop.propTypes = {
  children: PropTypes.array.isRequired,
  contentBackgroundColor: PropTypes.string,
  contentMaxWidth: PropTypes.number,
};

FixedTop.displayName = '!FixedTop';

export default Base(FixedTop);
