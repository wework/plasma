// @flow
import React, { Component, type Node } from 'react';
import Select from 'react-select';

import FlagIcon from './FlagIcon';
import OptionComponent from './Option';
import Value from './Value';

import styles from './style.scss';

import type { Country } from './types';

export type Props = {|
  name?: string,
  value?: ?string,
  onChange: (value: ?string) => void,
  onFocus: (SyntheticFocusEvent<>) => void,
  onBlur: (SyntheticFocusEvent<>) => void,
  options: Array<Country>,
  disabled?: boolean,
  tabIndex?: number | string,
  className?: string,
  focusPhoneInputField: () => void,
|};

export default class CountrySelect extends Component<Props> {
  placeholder(): Node {
    return (
      <div>
        <FlagIcon country="none" />
        <span className={styles.dialCode}>+</span>
      </div>
    );
  }

  handleBlur = (evt: SyntheticFocusEvent<>): void => {
    const {
      onBlur,
      focusPhoneInputField,
    } = this.props;

    onBlur(evt);
    focusPhoneInputField();
  };

  handleChange = (item: Country): void => {
    this.props.onChange(item.value);
  };

  render() {
    const {
      className,
      disabled,
      name,
      options,
      onFocus,
      value,
      tabIndex,
    } = this.props;

    return (
      <Select
        className={className}
        options={options}
        optionRenderer={OptionComponent}
        valueComponent={Value}
        searchable={false}
        clearable={false}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        value={value}
        tabIndex={tabIndex}
        name={name}
        placeholder={this.placeholder()}
      />
    );
  }
}
