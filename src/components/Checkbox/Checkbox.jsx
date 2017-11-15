import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.scss';
import {
  getDataAttrs,
  getDataProps }
from '../../dataUtils';

class Checkbox extends React.Component {

  render() {
    const {
      isBold,
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
    const wrapperClassName = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
    });
    const textClassName = cx(style.text, {
      [style.textBold]: isBold,
      [style.textDisabled]: disabled,
    });

    return (
      <div
        {...getDataAttrs(data)}
      >
        <div>
          <label
            htmlFor={id}
            className={wrapperClassName}
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
            <div className={textClassName}>
              {text}
            </div>
          </label>
        </div>
        { this.props.description &&
          <span className={style.description}>
            { this.props.description }
          </span>
        }
      </div>
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
  description: PropTypes.string,
  ...getDataProps(),
};

Checkbox.displayName = 'Plasma@Checkbox';

export default Checkbox;
