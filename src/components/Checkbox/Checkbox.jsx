// @flow
import React, { type Node } from 'react';
import cx from 'classnames';
import style from './style.scss';
import Icon from '../Icon/Icon';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

type Props = {|
  id?: string,
  checked?: boolean,
  data?: Data,
  description?: string,
  disabled?: boolean,
  fancy?: boolean,
  icon?: string,
  indeterminate?: boolean,
  isBold?: boolean,
  name?: string,
  onBlur?: () => mixed,
  onChange?: () => mixed,
  text: Node,
  value?: boolean,
|};

class Checkbox extends React.Component<Props> {
  static defaultProps = {
    checked: false,
    indeterminate: false,
    name: 'checkbox',
    text: 'Option',
    value: false,
  };

  render() {
    const {
      checked,
      data,
      description,
      disabled,
      fancy,
      icon,
      indeterminate,
      isBold,
      name,
      onBlur,
      onChange,
      text,
      value,
      id,
    } = this.props;

    const isChecked = checked || value;
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
            {icon && (
              <div className={fancy ? style.fancyIcon : style.icon}>
                <Icon icon={icon} />
              </div>
            )}
            <div className={textClassName}>{text}</div>
          </label>
        </div>
        {description && <span className={style.description}>{description}</span>}
      </div>
    );
  }
}

Checkbox.displayName = 'Plasma@Checkbox';

export default Checkbox;
