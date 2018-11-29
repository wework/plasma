// @flow
import React from 'react';
import cx from 'classnames';

import 'flag-icon-css/css/flag-icon.css';

import type { Flags } from './types';

export type Props = {|
  country: string,
  flags: Flags,
  flagsPath: string,
|};

export default function FlagIcon(props: Props): Node {
  const classes = cx('flag-icon', `flag-icon-${props.country.toLowerCase()}`);

  return <span className={classes} />;
}
