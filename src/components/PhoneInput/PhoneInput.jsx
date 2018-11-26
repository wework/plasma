// @flow
import React, {
  type Node,
  type ComponentType,
} from 'react';
import cx from 'classnames';
import ReactTelephoneInput from 'react-telephone-input';

// import { getDataAttrs } from '../../dataUtils';
// import type { Data } from '../../types';

import styles from './style.scss';



export type Props = {|
  value?: ?string,
  initialValue?: string,
  autoFormat?: boolean,
  defaultCountry?: string,
  isValid: (string) => boolean,
  onlyCountries: Array<{| name: string, iso2: string, dialCode: string, priority: number |}>,
  preferredCountries: Array<string>,
  flagsImagePath?: string,
  placeholder?: string,
  autoComplete?: string,
  classNames?: ?string,
  inputId?: string,
  onChange?: (formattedNumber: string, selectedCountry?: string) => void,
  onEnterKeyPress?: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  onBlur?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  onFocus?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  disabled?: boolean,
  pattern?: string,
  required?: boolean,
  inputProps?: { [key: string]: any },
  listStyle?: { [key: string]: any },
  listItemClassName?: string,
|};

export default function PhoneInput(
  {
    className,
    ...rest
  }: Props
): Node {
  return (
    <ReactTelephoneInput
      classNames={className}
      {...rest}
    />
  );
}
