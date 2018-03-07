import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDataAttrs, getDataProps } from '../../dataUtils';
import style from './style.scss';

class RadioButton extends React.Component {
  value = () => {
    const { checked, value, fieldValue } = this.props;
    return checked || (fieldValue && value === this.props.fieldValue);
  };

  render() {
    const {
      data,
      description,
      disabled,
      fancy,
      fieldValue,
      isLarge,
      name,
      onChange,
      text,
    } = this.props;
    const id = uniqueId('id');
    const wrapperClasses = cx(style.wrapper, {
      [style.disabled]: disabled,
      [style.fancy]: fancy,
      [style.fancyChecked]: fancy && this.value(),
      [style.isLarge]: isLarge,
    });
    const inlineClass = cx({ [style.inline]: fancy })
    const fauxCircle = fancy ? null : <div className={style.faux} />;
    return (
      <div {...getDataAttrs(data)} className={inlineClass}>
        <label htmlFor={id} className={wrapperClasses}>
          <input
            className={cx(style.original, {
              [style.disabled]: disabled,
            })}
            checked={this.value()}
            disabled={disabled}
            id={id}
            name={name}
            onChange={onChange}
            type="radio"
            value={fieldValue}
          />
        {fauxCircle}
          <div
            className={cx(style.text, {
              [style.disabled]: disabled,
            })}
          >
            {text}
          </div>
        </label>
        {description && (
          <span className={style.description}>{description}</span>
        )}
      </div>
    );
  }
}

RadioButton.defaultProps = {
  name: 'radioButton',
  text: 'Option',
};

RadioButton.propTypes = {
  ...getDataProps(),
  checked: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  fancy: PropTypes.bool,
  fieldValue: PropTypes.string,
  isLarge: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
};

RadioButton.displayName = 'Plasma@RadioButton';

export default RadioButton;
