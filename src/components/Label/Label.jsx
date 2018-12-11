// @flow
import React, { type Node } from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

const types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DISABLED: 'disabled',
};

type Props = {|
  text: string,
  type: string,
  children?: Node,
  data?: Data,
  className?: string,
|};

const Label = ({ type, text, data, children }: Props) => {
  const labelStyle = cx(style.label, {
    [style.labelSecondary]: type === types.SECONDARY,
    [style.labelDisabled]: type === types.DISABLED,
  });
  return (
    <div {...getDataAttrs(data)} className={labelStyle}>
      {text || children}
    </div>
  );
};

Label.defaultProps = {
  type: types.PRIMARY,
};

Label.displayName = 'Plasma@Label';

export default Label;
