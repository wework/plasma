// @flow
import React, { type Node } from 'react';
import cx from 'classnames';

import 'flag-icon-css/css/flag-icon.css';

export type Props = {|
  country: string,
|};

export default function FlagIcon(props: Props): Node {
  const classes = cx('flag-icon', `flag-icon-${props.country.toLowerCase()}`);

  return <span className={classes} />;
}
