// @flow
import React from 'react';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  id?: string,
  data?: Data,
  checked?: boolean,
  description?: ?string,
  disabled?: ?boolean,
  fancy?: ?boolean,
  fieldValue?: string,
  icon?: ?string,
  isLarge?: ?boolean,
  name: string,
  onChange: (event: SyntheticEvent<HTMLInputElement>) => mixed,
  text: string,
  value?: string,
|};

class RadioButton extends React.Component<Props> {
  static defaultProps = {
    name: 'radioButton',
    text: 'Option',
  };

  value = (): mixed => {
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
      icon,
      isLarge,
      name,
      onChange,
      text,
      id,
    } = this.props;
    const wrapperClasses = cx(style.wrapper, {
      [style.disabled]: disabled,
      [style.fancy]: fancy,
      [style.fancyChecked]: fancy && this.value(),
      [style.isLarge]: isLarge,
    });
    const inlineClass = cx({ [style.inline]: fancy });
    const fauxCircle = fancy ? null : <div className={style.faux} />;
    const fancyIcon =
      fancy && icon ? (
        <div className={style.fancyIcon}>
          <Icon icon={icon} />
        </div>
      ) : null;
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
          {fancyIcon}
          <div
            className={cx(style.text, {
              [style.disabled]: disabled,
            })}
          >
            {text}
          </div>
        </label>
        {description && <span className={style.description}>{description}</span>}
      </div>
    );
  }
}

RadioButton.displayName = 'Plasma@RadioButton';

export default RadioButton;
