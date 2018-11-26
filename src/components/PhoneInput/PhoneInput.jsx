// @flow
import React, {
  type Node,
  type ComponentType,
} from 'react';
import cx from 'classnames';
import { PhoneInput as ReactPhoneInput } from 'react-phone-number-input';
import { SmartInput } from 'react-phone-number-input/smart-input';
import metadata from 'libphonenumber-js/metadata.min.json'
import labels from 'react-phone-number-input/locale/default.json';

// import { getDataAttrs } from '../../dataUtils';
// import type { Data } from '../../types';

import 'react-phone-number-input/style.css';
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

export type CountrySelectComponentProps = {|
  name?: string,
  value?: ?string,
  onChange: (value: ?string) => void,
  onFocus: () => void,
  onBlur: () => void,
  options: Array<{| value: ?string, label: string, icon: ComponentType<*> |}>,
  disabled?: boolean,
  tabIndex?: number | string,
  className?: string,
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

function CountrySelectComponent(props: CountrySelectComponentProps): Node {
  const {
    className,
  } = props;

  return (
    <div className={className}>
      <button className={styles.countrySelectButton}>Button</button>
    </div>
  );
}

export default function PhoneInput(
  {
    ...rest
  }: Props
): Node {
  return (
    <ReactPhoneInput
      countrySelectComponent={CountrySelectComponent}
      internationalIcon={() => <div />}
      inputComponent={SmartInput}
      labels={labels}
      metadata={metadata}
      {...rest}
    />
  );
}
