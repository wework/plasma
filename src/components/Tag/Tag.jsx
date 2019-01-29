// @flow
import React, { type Node } from 'react';
import cn from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  text: Node,
  children: Node,
  data: Data,
  className: string,
|};

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
