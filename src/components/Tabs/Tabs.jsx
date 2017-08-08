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
  onClick = (tab, index) => {
    this.props.onChange(tab.label, index);
  }

  onKeyDown = (event, tab, index) => {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(tab, index);
    }
  }

  getTabClasses = (tab, index) => {
    const baseTabClass = this.props.vertical ? style.verticalTab : style.tab;

    return cn(baseTabClass, {
      [style.active]: (
        this.props.selectedIndex === index || this.props.selectedLabel === tab.label
      ),
      [style.first]: index === 0,
      [style.last]: index === this.props.items.length - 1,
    });
  }

  renderTab = (tab, index) => {
    return (
      <li
        role="tab"
        onClick={() => this.onClick(tab, index)}
        onKeyDown={(event) => this.onKeyDown(event, tab, index)}
        className={this.getTabClasses(tab, index)}
        key={index}
        tabIndex="0"
      >
        { tab.title }
      </li>
    );
  }

  render() {
    return (
      <ul
        {...getDataAttrs(this.props.data)}
        className={this.props.vertical ? style.verticalTabs : style.tabs}
        role="tablist"
      >
        { map(this.props.items, this.renderTab) }
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
