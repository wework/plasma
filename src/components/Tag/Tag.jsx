// @flow
import React from 'react';
import cn from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  text: React$Node,
  children?: React$Node,
  data?: Data,
  className?: string,
|};

/**
 * @deprecated
 */
const Tag = ({ text, children, data, className = '' }: Props) => {
  const tagClasses = cn(style.tag, style.small, className);
  return (
    <div className={tagClasses} {...getDataAttrs(data)}>
      <span>{text || children}</span>
    </div>
  );
};

Tag.displayName = 'Plasma@Tag';

export default Tag;
