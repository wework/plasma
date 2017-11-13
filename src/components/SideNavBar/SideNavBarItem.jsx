import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import style from './style.scss';

class SideNavBarItem extends Component {

  _onClick = () => {
    this.props.onClick(this.props.id);
  }

  renderIconAndLabel() {
    const { label } = this.props;

    return (
      <div className={style.iconAndLabelContainer}>
        <div className={style.label}>{label}</div>
      </div>
    );
  }

  render() {
    const { darkBg, selected, linkComponent, tagText } = this.props;

    const wrapperClasses = cn(style.itemWrapper, {
      [style.darkBg]: darkBg,
      [style.selected]: selected,
    });

    let comp;

    if (linkComponent) {
      comp = (
        <div
          className={wrapperClasses}
        >
          { linkComponent }
          { tagText && <div className={style.tag}>{tagText}</div>}
        </div>
      );
    } else {
      comp = (
        <div
          className={wrapperClasses}
          onClick={this._onClick}
        >
          { this.renderIconAndLabel() }
          { tagText && <div className={style.tag}>{tagText}</div>}
        </div>
      );
    }

    return comp;
  }
}

SideNavBarItem.defaultProps = {
  label: 'Label',
  iconSize: 16,
  selected: false,
  tagText: null,
};

SideNavBarItem.propTypes = {
  id: PropTypes.string,
  /**
  * URL to an image
  */
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  /**
  * Only override iconStyle when absolutely necessary.
  * Prefer `iconSize`.
  */
  iconStyle: PropTypes.object,
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  children: PropTypes.node,
  darkBg: PropTypes.bool,
  linkComponent: PropTypes.node,
  tagText: PropTypes.string,
};

SideNavBarItem.displayName = 'Plasma@SideNavBarItem';

export default SideNavBarItem;
