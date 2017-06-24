import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class Checkbox extends React.Component {
  render() {
    const { checked, indeterminate, name, onChange, text } = this.props;
    const id = uniqueId('id');
    const inputClassName = indeterminate ? style.indeterminate : style.original;

    return (
      <label
        {...getDataAttrs(this.props)}
        htmlFor={id}
        className={style.wrapper}
      >
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
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  data: PropTypes.object,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
