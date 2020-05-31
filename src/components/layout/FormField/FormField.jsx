// @flow
import React from 'react';
import type { StyleAttributes } from '../../../types';
import { getDataAttrs } from '../../../dataUtils';
import styles from './style.scss';
import Label from '../../Label/Label.jsx';

type Props = {|
  children: React$Node,
  isDisabled?: boolean,
  isRequired?: boolean,
  label: string,
  displayError?: boolean,
  errorMessage?: string,
  data?: Object,
  style?: StyleAttributes,
|};

/**
 * @deprecated
 */
const FormField = ({
  children,
  isDisabled,
  isRequired,
  label,
  data,
  displayError,
  errorMessage,
  style,
}: Props) => {
  let labelText = label;

  if (isRequired) {
    labelText += ' *';
  }

  return (
    <div {...getDataAttrs(data)} className={styles.wrapper} style={style}>
      <Label disabled={isDisabled}>{labelText}</Label>
      <div className={styles.input}>{children}</div>
      {displayError && errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

FormField.defaultProps = {
  children: '',
  disabled: false,
  label: '',
  style: {},
};

FormField.displayName = 'Plasma@FormField';

export default FormField;
