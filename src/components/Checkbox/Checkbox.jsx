import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class Checkbox extends React.Component {
  render() {
    const { checked, indeterminate, name, onChange, text } = this.props;
    const id = _.uniqueId('id');
    const inputClassName = indeterminate ? style.indeterminate : style.original;

    return (
      <label
        htmlFor={id}
        className={style.wrapper}
        {...getDataAttrs(this.props.data)}
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
  data: PropTypes.obj,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
