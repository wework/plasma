import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import style from './style.scss';

const type = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  SMALL: 'small',
};

class Toggle extends React.Component {
  onClick(toggle, index) {
    this.props.onChange(toggle.label, index);
  }

  onKeyDown(event, toggle, index) {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(toggle, index);
    }
  }

  render() {
    return (
      <ul
        {...getDataAttrs(this.props.data)}
        className={style.toggleWrapper}
        role="tablist"
      >
        { _.map(this.props.items, (toggle, index) => {
          const toggleClasses = cx(style.toggle, {
            [style.active]: (this.props.selectedIndex === index ||
                             this.props.selectedLabel === toggle.label),
            [style.disabled]: this.props.items[index].disabled,
            [style.horizontal]: this.props.type === type.HORIZONTAL,
            [style.vertical]: this.props.type === type.VERTICAL,
            [style.small]: this.props.size === type.SMALL,
          });

          return (
            <li
              role="tab"
              onClick={() => this.onClick(toggle, index)}
              onKeyDown={(event) => this.onKeyDown(event, toggle, index)}
              className={toggleClasses}
              key={index}
              type={this.props.type}

            >
              { toggle.title }
            </li>
          );
        })}
      </ul>
    );
  }
}

Toggle.defaultProps = {
  items: [],
  type: type.HORIZONTAL,
  onChange: () => { },
};

Toggle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
  selectedLabel: PropTypes.string,
  type: PropTypes.string,
  ...getDataProps(),
};

Toggle.displayName = 'Plasma@Toggle';

export default Toggle;
