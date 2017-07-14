import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Base from '../Base.jsx';
import style from './style.scss';

const Tag = ({ text }) => {
  const tagClasses = cn(style.tag, style.small)
  return (
    <div className={tagClasses}>
      <span>{text}</span>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Base(Tag);
