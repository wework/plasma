import React from 'react';
import style from './style.scss';

const DropDownMenuOption = ({ onClick, optionKey, text }) => {
  return (
    <li
      className={style.revealableListItem}
      onClick={() => onClick(optionKey)}
    >
      { text }
    </li>
  );
};

DropDownMenuOption.propTypes = {
  onClick: React.PropTypes.func,
  optionKey: React.PropTypes.number,
  text: React.PropTypes.string,
};

export default DropDownMenuOption;
