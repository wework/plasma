import React from 'react';
import PropTypes from 'prop-types';
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
  onClick: PropTypes.func,
  optionKey: PropTypes.number,
  text: PropTypes.string,
};

export default DropDownMenuOption;
