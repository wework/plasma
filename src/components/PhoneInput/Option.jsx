// @flow
import React, { type Node } from 'react';

import dialCodeFromCountry from './dialCodeFromCountry';

import type { Country } from './types';

import styles from './style.scss';

export default function Option(props: Country): Node {
  const {
    value,
    label,
    icon: Icon,
  } = props;

  const dialCode = dialCodeFromCountry(value) || '';

  return (
    <div className={styles.optionRow}>
      <Icon {...props} />
      <span className={styles.countryName}>{label}</span>
      {
        value && (
          <span className={styles.dialCode}>{`+${dialCode}`}</span>
        )
      }
    </div>
  );
}
