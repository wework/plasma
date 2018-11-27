// @flow
import React, { Component } from 'react';
import Select from 'react-select';

import FlagComponent from './FlagComponent';
import OptionComponent from './OptionComponent';
import ValueComponent from './ValueComponent';

import styles from './style.scss';

export type CountrySelectComponentProps = {|
  name?: string,
  value?: ?string,
  onChange: (value: ?string) => void,
  onFocus: () => void,
  onBlur: () => void,
  options: Array<Country>,
  disabled?: boolean,
  tabIndex?: number | string,
  className?: string,
  focusPhoneInputField: () => void,
  name: ?string
|};

export default class CountrySelectComponent extends Component<CountrySelectComponentProps> {
  placeholder() {
    return (
      <div>
        <FlagComponent country="none" />
        <span className={styles.dialCode}>+</span>
      </div>
    );
  }

  handleBlur = (evt: SyntheticFocusEvent<>) => {
    const {
      onBlur,
      focusPhoneInputField,
    } = this.props;

    onBlur(evt);
    focusPhoneInputField();
  };

  handleChange = (item) => {
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
        valueComponent={ValueComponent}
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
