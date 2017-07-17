import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { map } from 'lodash';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import style from './style.scss';

class Tabs extends React.Component {
  onClick(tab, index) {
    this.props.onChange(tab.label, index);
  }
  onKeyDown(event, tab, index) {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(tab, index);
    }
  }
  render() {
    return (
      <ul
        {...getDataAttrs(this.props.data)}
        className={style.tabs}
        role="tablist"
      >
        { map(this.props.items, (tab, index) => {
          const tabClasses = cn(style.tab, {
            [style.active]: (
              this.props.selectedIndex === index || this.props.selectedLabel === tab.label
            ),
            [style.first]: index === 0,
            [style.last]: index === this.props.items.length - 1,
          });

          return (
            <li
              role="tab"
              onClick={() => this.onClick(tab, index)}
              onKeyDown={(event) => this.onKeyDown(event, tab, index)}
              className={tabClasses}
              key={index}
              tabIndex="0"
            >
              { tab.title }
            </li>
          );
        })}
      </ul>
    );
  }
}

Tabs.defaultProps = {
  items: [],
  onChange: () => { },
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
  selectedLabel: PropTypes.string,
  ...getDataProps(),
};

Tabs.displayName = 'Plasma@Tabs';

export default Tabs;
