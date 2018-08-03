// @flow
/* eslint react/prop-types: 0 */
import React, { type Node } from 'react';
import style from './style.scss';
import Header from '../Header/Header';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';


type Props = {|
    title: string,
    actions: Array<Node>,
    children: Node,
    visible: boolean,
    onDismiss: (evt: MouseEvent) => void,
    style: Object,
    minWidth: number,
    maxWidth: number,
    data: Data,
|};

class Modal extends React.Component<Props> {
  render() {
    let comp = null;
    const {
      title,
      actions,
      data,
      children,
      onDismiss,
      minWidth = 0,
      maxWidth,
    } = this.props;
    if (this.props.visible) {
      comp = (
        <div
          {...getDataAttrs(data)}
          className={style.wrapper}
        >
          <div className={style.innerWrapper}>
            <div
              style={{ minWidth, maxWidth }}
              className={style.card}
            >
              <div className={style.content}>
                { title &&
                  <div className={style.top}>
                    <Header h3>
                      { title }
                    </Header>
                  </div>
                }
                {children}
                { actions &&
                  <div className={style.pageActions}>
                    { actions }
                  </div>
                }
              </div>
            </div>
          </div>
          <div
            className={style.overlay}
            onClick={onDismiss}
          />
        </div>
      );
    }
    return comp;
  }
}

Modal.displayName = 'Plasma@Modal';

export default Modal;
