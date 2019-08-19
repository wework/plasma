// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import style from './style.scss';
import Header from '../Header/Header';
import { getDataAttrs } from '../../dataUtils';
import type { Data, StyleAttributes } from '../../types';

type Props = {|
  title?: string,
  actions?: Array<Node>,
  children: React$Node,
  visible?: boolean,
  onDismiss?: (evt: MouseEvent) => void,
  innerCardStyle?: StyleAttributes,
  minWidth?: string | number,
  maxWidth?: string | number,
  data?: Data,
  contentClassName?: string,
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
      innerCardStyle,
      contentClassName,
    } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <div {...getDataAttrs(data)} className={style.wrapper}>
        <div className={style.innerWrapper}>
          <div style={{ ...innerCardStyle, minWidth, maxWidth }} className={style.card}>
            <div className={cn(style.content, contentClassName)}>
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
