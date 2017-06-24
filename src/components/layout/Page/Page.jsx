import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';

class Page extends React.Component {
  render() {
    return (
      <div
        className={style.wrapper}
        ref={(c) => { this.wrapper = c; }}
        {...getDataAttrs(this.props.data)}
      >
        <div className={style.content}>
          { this.props.title &&
            <div className={style.title}>
              { this.props.title }
            </div>
          }
          { this.props.children }
        </div>
      </div>
    );
  }
}

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.object,
};

Page.displayName = 'Plasma@Page';

export default Page;
