// @flow
import React from 'react';

import dialCodeFromCountry from './dialCodeFromCountry';

import type { Country } from './types';

import styles from './style.scss';

export default function Option(props: Country): Node {
  const {
    value,
    label,
    icon,
  } = props;

  return (
    <div className={styles.optionRow}>
      {icon(props)}
      <span className={styles.countryName}>{label}</span>
      {
        value && (
          <span className={styles.dialCode}>{`+${dialCodeFromCountry(value)}`}</span>
        )
      }
    </div>
  );
}
