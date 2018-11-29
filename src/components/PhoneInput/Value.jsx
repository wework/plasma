// @flow
import React from 'react';

import dialCodeFromCountry from './dialCodeFromCountry';

import type { Country } from './types';

import styles from './style.scss';

export type Props = {|
  value: Country,
  id: string
|};

export default function Value({ value, id }: Props): Node {
  return (
    <div className="Select-value" id={id}>
      {value.icon(value)}
      <span className={styles.dialCode}>{`+${dialCodeFromCountry(value.value)}`}</span>
    </div>
  );
}
