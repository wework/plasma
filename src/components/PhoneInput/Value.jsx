// @flow
import React, { type Node } from 'react';

import dialCodeFromCountry from './dialCodeFromCountry';

import type { Country } from './types';

import styles from './style.scss';

export type Props = {|
  value: Country,
  id: string
|};

export default function Value({ value, id }: Props): Node {
  const dialCode = dialCodeFromCountry(value.value) || '';

  const Icon = value.icon;

  return (
    <div className="Select-value" id={id}>
      <Icon value={value} />
      <span className={styles.dialCode}>{`+${dialCode}`}</span>
    </div>
  );
}
