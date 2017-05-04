import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';

class Modal extends React.Component {
  render() {
    let comp = null;
    if (this.props.visible) {
      comp = (
        <div className={style.wrapper} >
          <div className={style.innerWrapper}>
            <div className={style.card} style={this.props.style}>
              <div className={style.content}>
                {this.props.children}
              </div>
              <div className={style.actions} />
            </div>
          </div>
          <div
            className={style.overlay}
            onClick={this.props.onDismiss}
          />
        </div>
      );
    }
    return comp;
  }
}

Modal.defaultProps = {};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
};

Modal.displayName = 'Modal';

export default Base(Modal);
