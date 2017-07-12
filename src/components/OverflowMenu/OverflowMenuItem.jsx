import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const OverflowMenuItem = ({ onClick, optionKey, text }) => {
  return (
    <li
      className={style.revealableListItem}
      onClick={() => onClick(optionKey)}
    >
      { text }
    </li>
  );
};

OverflowMenuItem.propTypes = {
  onClick: PropTypes.func,
  optionKey: PropTypes.string,
  text: PropTypes.string,
};

OverflowMenuItem.displayName = 'Plasma@OverflowMenuItem';

export default OverflowMenuItem;
