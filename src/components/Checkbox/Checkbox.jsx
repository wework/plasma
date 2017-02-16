import _ from 'lodash';
import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class Checkbox extends React.Component {
  render() {
    const { checked, indeterminate, name, onChange, text } = this.props;
    const id = _.uniqueId('id');
    const inputClassName = indeterminate ? style.indeterminate : style.original;

    return (
      <label htmlFor={id} className={style.wrapper}>
        <input
          checked={checked}
          className={inputClassName}
          type="checkbox"
          id={id}
          name={name}
          onChange={onChange}
        />
        <div className={style.checkbox} />
        <div className={style.text}>
          {text}
        </div>
      </label>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  text: 'Option',
  name: 'checkbox',
};

Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  indeterminate: React.PropTypes.bool,
  text: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node,
    React.PropTypes.element,
  ]).isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
};

Checkbox.displayName = 'Checkbox';

export default Base(Checkbox);
