// @flow
import React, { type Node } from 'react';
import Header from '../Header/Header';

import { getDataAttrs } from '../../dataUtils';

import type { Data } from '../../types';

import styles from './style.scss';

type Props = {|
  title: string,
  actions: Array<Node>,
  children: Node,
  visible?: boolean,
  onDismiss?: (evt: SyntheticMouseEvent<>) => void,
  innerCardStyle: { [string]: string | number },
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
      innerCardStyle,
    } = this.props;

    if (!visible) {
      return null;
    }

    return (
      <div {...getDataAttrs(data)} className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div style={{ ...innerCardStyle, minWidth, maxWidth }} className={styles.card}>
            <div className={styles.content}>
              {title && (
                <div className={styles.top}>
                  <Header h3>{title}</Header>
                </div>
              )}
              {children}
              {actions && <div className={styles.pageActions}>{actions}</div>}
            </div>
          </div>
        </div>
        <div className={styles.overlay} onClick={onDismiss} />
      </div>
    );
  }
}

Modal.displayName = 'Plasma@Modal';

export default Modal;
