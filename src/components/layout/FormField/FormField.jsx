// @flow
import React, { type Node } from 'react';
import { getDataAttrs } from '../../../dataUtils';
import styles from './style.scss';
import Label from '../../Label/Label.jsx';

type Props = {|
  children: Node,
  isDisabled?: boolean,
  isRequired?: boolean,
  label: string,
  displayError?: boolean,
  errorMessage?: string,
  data?: Object,
  style?: { [string]: string },
|};

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
      <Label text={labelText} disabled={isDisabled} />
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
