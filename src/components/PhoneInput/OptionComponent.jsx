// @flow
import React from 'react';

import dialCodeForCountryCode from './dialCodeForCountryCode';

import type { Country } from './types';

import styles from './style.scss';

export default function OptionComponent(props: Country) {
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
          <span className={styles.dialCode}>{`+${dialCodeForCountryCode(value)}`}</span>
        )
      }
    </div>
  );
}
