import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps }
from '../../dataUtils';

class Checkbox extends React.Component {

  render() {
    const {
      checked,
      indeterminate,
      name,
      text,
      onChange,
      disabled,
      value,
      data,
    } = this.props;
    const id = uniqueId('id');
    const inputClassName = indeterminate ? style.indeterminate : style.original;

    return (
      <label
        {...getDataAttrs(data)}
        htmlFor={id}
        className={style.wrapper}
      >
        <input
          disabled={disabled}
          checked={checked || value}
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
  value: false,
  indeterminate: false,
  text: 'Option',
  name: 'checkbox',
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.bool,
  indeterminate: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  ...getDataProps(),
};

Checkbox.displayName = 'Plasma@Checkbox';

export default Checkbox;
