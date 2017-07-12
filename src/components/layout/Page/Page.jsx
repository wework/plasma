import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/Header';
import getDataAttrs from '../../../getDataAttrs';
import style from './style.scss';

class Page extends React.Component {
  render() {
    const {
      title,
      children,
      actions,
      breadcrumb,
    } = this.props;

    return (
      <div
        className={style.wrapper}
        ref={(c) => { this.wrapper = c; }}
        {...getDataAttrs(this.props.data)}
      >
        <div className={style.content}>
          { breadcrumb &&
            <div className={style.breadcrumb}>
              { breadcrumb }
            </div>
          }
          { (title || actions) &&
            <div className={style.top}>
              { title &&
                <Header h2 noMargin>
                  { title }
                </Header>
              }
              { actions &&
                <div className={style.pageActions}>
                  { actions.map((action) => action)}
                </div>
              }
            </div>
          }
          { children }
        </div>
      </div>
    );
  }
}

Page.defaultProps = {};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.object,
  actions: PropTypes.array,
  breadcrumb: PropTypes.node,
};

Page.displayName = 'Plasma@Page';

export default Page;
