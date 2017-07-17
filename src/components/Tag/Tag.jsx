import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  getDataAttrs,
  getDataProps }
from '../../dataUtils';
import style from './style.scss';

const Tag = ({ text, data }) => {
  const tagClasses = cn(style.tag, style.small);
  return (
    <div
      className={tagClasses}
      {...getDataAttrs(data)}
    >
      <span>{text}</span>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  ...getDataProps(),
};

Tag.displayName = 'Plasma@Tag';

export default Tag;
