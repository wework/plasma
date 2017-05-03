import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';
import cn from 'classnames';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }
  onClick(index) {
    this.setState({
      selectedIndex: index
    });
    if (this.props.onClick) {
      this.props.onClick(index);
    }
  }
  onKeyDown(event, index) {
    if (event.keyCode === 13 /* enter */) {
      this.onClick(index);
    }
  }
  render() {
    return (
      <ul className={style.tabs} role="tablist">
        {_.map(this.props.items, (tabTitle, index) => {

          const tabClasses = cn(style.tab, {
            [style.active]: this.state.selectedIndex === index,
            [style.first]: index === 0,
            [style.last]: index === this.props.items.length - 1
          });

          return (
            <li
              role="tab"
              onClick={() => this.onClick(index)}
              onKeyDown={(event) => this.onKeyDown(event, index)}
              className={tabClasses}
              key={index}
              tabIndex="0"
            >
              { tabTitle }
            </li>
          );
        })}
      </ul>
    );
  }
}

Tabs.defaultProps = {
  items: [],
  onClick: function() { },
};

Tabs.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

Tabs.displayName = 'Tabs';

export default Base(Tabs);
