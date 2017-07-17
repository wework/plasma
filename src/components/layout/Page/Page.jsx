import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/Header';
import {
  getDataAttrs,
  getDataProps,
} from '../../../dataUtils';
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
  actions: PropTypes.array,
  breadcrumb: PropTypes.node,
  ...getDataProps(),
};

Page.displayName = 'Plasma@Page';

export default Page;
