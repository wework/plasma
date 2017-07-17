import React from 'react';
import PropTypes from 'prop-types';
import {
  getDataAttrs,
  getDataProps,
} from '../../../dataUtils';
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
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
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
          <div className={style.content} style={{ backgroundColor: this.props.backgroundColor }}>
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedTop.defaultProps = {
  children: ['', ''],
  backgroundColor: 'transparent',
};

FixedTop.propTypes = {
  children: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string,
  ...getDataProps(),
};

FixedTop.displayName = '!Plasma@FixedTop';

export default FixedTop;
