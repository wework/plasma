// @flow
import React from 'react';

import dialCodeForCountryCode from './dialCodeForCountryCode';

import type { Country } from './types';

import styles from './style.scss';

export default function ValueComponent({ value, id }: {| value: Country, id: string |}) {
  return (
    <div className="Select-value" id={id}>
      {value.icon(value)}
      <span className={styles.dialCode}>{`+${dialCodeForCountryCode(value.value)}`}</span>
    </div>
  );
}
