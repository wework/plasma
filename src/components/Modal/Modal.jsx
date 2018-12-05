// @flow
import React, { type Node } from 'react';
import style from './style.scss';
import Header from '../Header/Header';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  title?: string,
  actions?: Array<Node>,
  children: Node,
  visible?: boolean,
  onDismiss?: (evt: MouseEvent) => void,
  style?: { [string]: string | number },
  minWidth?: string | number,
  maxWidth?: string | number,
  data?: Data,
|};

class Modal extends React.Component<Props> {
  render() {
    const {
      title,
      actions,
      data,
      children,
      onDismiss,
      minWidth = 0,
      maxWidth,
      visible,
    } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <div {...getDataAttrs(data)} className={style.wrapper}>
        <div className={style.innerWrapper}>
          <div style={{ minWidth, maxWidth }} className={style.card}>
            <div className={style.content}>
              {title && (
                <div className={style.top}>
                  <Header h3>{title}</Header>
                </div>
              )}
              {children}
              {actions && <div className={style.pageActions}>{actions}</div>}
            </div>
          </div>
        </div>
        <div className={style.overlay} onClick={onDismiss} />
      </div>
    );
  }
}

Modal.displayName = 'Plasma@Modal';

export default Modal;
