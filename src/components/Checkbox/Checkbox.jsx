import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.scss';
import { getDataAttrs, getDataProps } from '../../dataUtils';

class Checkbox extends React.Component {
  render() {
    const {
      checked,
      data,
      disabled,
      fancy,
      indeterminate,
      isBold,
      name,
      onBlur,
      onChange,
      text,
      value,
    } = this.props;

    const isChecked = (checked || value);
    const id = uniqueId('id');
    const inlineClass = cx({ [style.inline]: fancy });
    const inputClassName = indeterminate ? style.indeterminate : style.original;
    const wrapperClassName = cx(style.wrapper, {
      [style.wrapperDisabled]: disabled,
      [style.fancy]: fancy,
      [style.fancyChecked]: fancy && isChecked,
    });
    const textClassName = cx(style.text, {
      [style.textBold]: isBold,
      [style.textDisabled]: disabled,
    });

    return (
      <div {...getDataAttrs(data)} className={inlineClass}>
        <div>
          <label htmlFor={id} className={wrapperClassName}>
            <input
              checked={isChecked}
              className={inputClassName}
              disabled={disabled}
              id={id}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              type="checkbox"
            />
            {!fancy && <div className={style.checkbox} />}
            <div className={textClassName}>{text}</div>
          </label>
        </div>
        {this.props.description && (
          <span className={style.description}>{this.props.description}</span>
        )}
      </div>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  name: 'checkbox',
  text: 'Option',
  value: false,
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  fancy: PropTypes.bool,
  indeterminate: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]).isRequired,
  value: PropTypes.bool,
  ...getDataProps(),
};

Checkbox.displayName = 'Plasma@Checkbox';

export default Checkbox;
