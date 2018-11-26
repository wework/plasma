// @flow
import React, {
  Component,
  type Node,
  type ComponentType,
} from 'react';
import Select from 'react-select';
import cx from 'classnames';
import { PhoneInput as ReactPhoneInput } from 'react-phone-number-input';
import { SmartInput } from 'react-phone-number-input/smart-input';
import metadata from 'libphonenumber-js/metadata.min.json';
import labels from 'react-phone-number-input/locale/default.json';

// import { getDataAttrs } from '../../dataUtils';
// import type { Data } from '../../types';

import 'flag-icon-css/css/flag-icon.css';
import styles from './style.scss';

export type Metadata = {|
  country_calling_codes: {},
  countries: {}
|};

export type Labels = { [key: string]: string };

export type Flags = { [key: string]: () => Node };

export type FlagComponentProps = {|
  country: string,
  flags: Flags,
  flagsPath: string,
|};

type Country = {|
  value: ?string,
  label: string,
  icon: ComponentType<*>
|};

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

export type InputComponentProps = {|
  value: string,
  onChange?: (value: ?string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  country?: ?string,
  metadata: Metadata,
|};

export type Props = {|
  value?: ?string,
  onChange?: (value: ?string) => void,
  onFocus?: <+T: EventTarget = EventTarget>(SyntheticFocusEvent<T>) => void,
  onBlur?: <+T: EventTarget = EventTarget>(SyntheticFocusEvent<T>) => void,
  onKeyDown?: <+T: EventTarget = EventTarget>(SyntheticKeyboardEvent<T>) => void,
  disabled: boolean,
  autoComplete: string,
  displayInitialValueAsLocalNumber: boolean,
  country?: string,
  countries?: Array<string>,
  labels: Labels,
  flagsPath: string,
  flags: Flags,
  flagComponent: ComponentType<$Shape<FlagComponentProps>>,
  international: boolean,
  internationalIcon: () => ComponentType<*>,
  showCountrySelect: boolean,
  countrySelectTabIndex?: number,
  countryOptions?: Array<string>,
  style?: { [key: string]: string },
  className?: string,
  inputClassName?: string,
  getInputClassName?: ({| disabled?: boolean, invalid?: boolean |}) => string,
  countrySelectComponent: ComponentType<$Shape<CountrySelectComponentProps>>,
  inputComponent: ComponentType<$Shape<InputComponentProps>>,
  ext?: Node,
  limitMaxLength: boolean,
  error?: string,
  indicateInvalid?: boolean,
  locale?: { [key: string]: string },
  metadata: Metadata,
  onCountryChange: (country: string) => void,
  placeholder?: string,
  [prop: string]: any,
|};

function dialCodeForCountryCode(countryCode: string): string | null {
  const country = metadata.countries[countryCode];

  if (!country) {
    return null;
  }

  return country[0];
}

function ValueComponent({ value, id }: {| value: Country, id: string |}) {
  return (
    <div className="Select-value" id={id}>
      {value.icon(value)}
      <span className={styles.dialCode}>{`+${dialCodeForCountryCode(value.value)}`}</span>
    </div>
  );
}

function FlagComponent(props: FlagComponentProps) {
  const classes = cx('flag-icon', `flag-icon-${props.country.toLowerCase()}`);

  return <span className={classes} />;
}

function OptionComponent(props: Country) {
  const {
    value,
    label,
    icon,
  } = props;

  return (
    <div className={styles.optionRow}>
      {
        value ? icon(props) : <FlagComponent country="none" />
      }
      <span className={styles.countryName}>{label}</span>
      {
        value && (
          <span className={styles.dialCode}>{`+${dialCodeForCountryCode(value)}`}</span>
        )
      }
    </div>
  );
}

class CountrySelectComponent extends Component<CountrySelectComponentProps> {
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

export default function PhoneInput(
  {
    ...rest
  }: Props,
): Node {
  return (
    <ReactPhoneInput
      className={styles.phoneInput}
      countrySelectComponent={CountrySelectComponent}
      internationalIcon={() => <div />}
      inputComponent={SmartInput}
      flagComponent={FlagComponent}
      labels={labels}
      metadata={metadata}
      {...rest}
    />
  );
}
