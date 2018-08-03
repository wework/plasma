// @flow
import React, { type Node } from 'react';
import Header from '../../Header/Header';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';
import style from './style.scss';

type Props = {|
  title: string,
  children: Node,
  actions: Array<Object>,
  breadcrumb: Node,
  data: Data,
|};

class Page extends React.Component<Props> {
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

Page.displayName = 'Plasma@Page';

export default Page;
