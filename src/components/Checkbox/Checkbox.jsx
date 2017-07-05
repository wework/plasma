import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base.jsx';
import style from './style.scss';

class Checkbox extends React.Component {

  render() {
    const { checked, indeterminate, name, text, onChange, disabled } = this.props;
    const id = _.uniqueId('id');
    const inputClassName = indeterminate ? style.indeterminate : style.original;

    return (
      <label htmlFor={id} className={style.wrapper}>
        <input
          disabled={disabled}
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
  disabled: PropTypes.bool,
};

Checkbox.displayName = 'Checkbox';

export default Base(Checkbox);
