// @flow
import React, {
  Component,
  type Node,
  type ComponentType,
} from 'react';
import { PhoneInput as ReactPhoneInput } from 'react-phone-number-input';
import { SmartInput } from 'react-phone-number-input/smart-input';
import { getExampleNumber } from 'libphonenumber-js';

import metadata from 'libphonenumber-js/metadata.min.json';
import examples from 'libphonenumber-js/examples.mobile.json';
import labels from 'react-phone-number-input/locale/default.json';

import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

import styles from './style.scss';
import CountrySelectComponent from './CountrySelectComponent';
import FlagComponent from './FlagComponent';
import type {
  Metadata,
  PhoneNumber,
} from './types';

export type InputComponentProps = {|
  value: string,
  onChange?: (value: ?string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  country?: ?string,
  metadata: Metadata,
|};

type State = {|
  country: ?string,
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
  onCountryChange: (country: ?string) => void,
  placeholder?: string,
  data: Data,
  [prop: string]: any,
|};

function generateExampleNumber(country: ?string): string {
  if (!country) {
    return '';
  }

  const number: PhoneNumber = getExampleNumber(country, examples);

  return number
    .formatNational()
    .replace(/\d/g, '0');
}

export default class PhoneInput extends Component<Props, State> {
  state = {
    country: this.props.country,
  };

  handleCountryChange = (country: string) => {
    this.setState({
      country,
    });

    const {
      onCountryChange,
    } = this.props;

    onCountryChange && onCountryChange(country);
  };

  render(): Node {
    const {
      data,
      ...props
    } = this.props;

    return (
      <ReactPhoneInput
        className={styles.phoneInput}
        countrySelectComponent={CountrySelectComponent}
        internationalIcon={() => <FlagComponent country="none" />}
        inputComponent={SmartInput}
        flagComponent={FlagComponent}
        labels={labels}
        metadata={metadata}
        placeholder={generateExampleNumber(this.state.country)}
        {...getDataAttrs(data)}
        {...props}
        onCountryChange={this.handleCountryChange}
      />
    );
  }
}
