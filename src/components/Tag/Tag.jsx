import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const Tag = ({ text }) => {
  const tagClasses = cn(style.tag, style.small);
  return (
    <div
      className={tagClasses}
      {...getDataAttrs(this.props.data)}
    >
      <span>{text}</span>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

Tag.displayName = 'Plasma@Tag';

export default Tag;
