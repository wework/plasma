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

import CountrySelect from './CountrySelect';
import FlagIcon from './FlagIcon';

import type {
  Flags,
  Labels,
  Metadata,
  PhoneNumber,
} from './types';

import styles from './style.scss';

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
  onFocus?: (SyntheticFocusEvent<*>) => void,
  onBlur?: (SyntheticFocusEvent<*>) => void,
  onKeyDown?: (SyntheticKeyboardEvent<*>) => void,
  disabled: boolean,
  autoComplete: string,
  displayInitialValueAsLocalNumber: boolean,
  country?: string,
  countries?: Array<string>,
  labels: Labels,
  flagsPath: string,
  flags: Flags,
  flagComponent: ComponentType<$Shape<Props>>,
  international: boolean,
  internationalIcon: ComponentType<*>,
  showCountrySelect: boolean,
  countrySelectTabIndex?: number,
  countryOptions?: Array<string>,
  style?: { [key: string]: string },
  className?: string,
  inputClassName?: string,
  getInputClassName?: ({| disabled?: boolean, invalid?: boolean |}) => string,
  countrySelectComponent: ComponentType<$Shape<Props>>,
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

const InternationalIcon: ComponentType<Props> = (): Node => <FlagIcon country="none" />;

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
        countrySelectComponent={CountrySelect}
        internationalIcon={InternationalIcon}
        inputComponent={SmartInput}
        flagComponent={FlagIcon}
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

PhoneInput.displayName = 'Plasma@PhoneInput';
