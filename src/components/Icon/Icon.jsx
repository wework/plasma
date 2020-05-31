// @flow
import React from 'react';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  icon: string,
  color: string,
  data?: Data,
  size?: number,
|};

/**
 * @deprecated
 */
const Icon = ({ icon, color, data }: Props) => {
  return (
    <div
      className={style.wrapper}
      style={{ fill: color }}
      dangerouslySetInnerHTML={{ __html: icon }}
      {...getDataAttrs(data)}
    />
  );
};

Icon.defaultProps = {
  color: '#000',
  size: 16,
};

Icon.displayName = 'Plasma@Icon';

export default Icon;
