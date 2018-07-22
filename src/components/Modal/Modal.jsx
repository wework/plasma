import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Header from '../Header/Header';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

const ESC_KEY_CODE = 27;

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.dismissOnEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.dismissOnEscKey, false);
  }

  dismissOnEscKey = ({ keyCode }) => {
    const { visible, onDismiss } = this.props;
    if (visible && keyCode === ESC_KEY_CODE) {
      onDismiss();
    }
  }

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
      visible,
    } = this.props;
    if (visible) {
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

Modal.defaultProps = {};

Modal.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  ...getDataProps(),
};

Modal.displayName = 'Plasma@Modal';

export default Modal;
