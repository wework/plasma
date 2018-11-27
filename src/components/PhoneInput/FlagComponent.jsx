// @flow
import React from 'react';
import cx from 'classnames';

import 'flag-icon-css/css/flag-icon.css';

import type { Flags } from './types';

export type FlagComponentProps = {|
  country: string,
  flags: Flags,
  flagsPath: string,
|};

export default function FlagComponent(props: FlagComponentProps) {
  const classes = cx('flag-icon', `flag-icon-${props.country.toLowerCase()}`);

  return <span className={classes} />;
}
