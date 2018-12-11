// @flow
import React from 'react';
import style from './style.scss';

type Props = {
  onClick: any => void,
  optionKey: string,
  text: string,
};

const OverflowMenuItem = ({ onClick, optionKey, text }: Props) => {
  return (
    <li className={style.revealableListItem} onClick={() => onClick(optionKey)}>
      {text}
    </li>
  );
};

OverflowMenuItem.displayName = 'Plasma@OverflowMenuItem';

export default OverflowMenuItem;
