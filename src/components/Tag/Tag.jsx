import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  getDataAttrs,
  getDataProps }
from '../../dataUtils';
import style from './style.scss';

const Tag = ({ text, children, data, className = '' }) => {
  const tagClasses = cn(style.tag, style.small, className);
  return (
    <div
      className={tagClasses}
      {...getDataAttrs(data)}
    >
      <span>{text || children}</span>
    </div>
  );
};

Tag.propTypes = {
  text: (props, propName, componentName) => {
    if (!props.text && !props.children) {
      // eslint-disable-next-line 
      return new Error(`One of props 'text' or 'children' was not specified in '${componentName}'.`);
    }
    return null;
  },
  children: (props, propName, componentName) => {
    if (!props.text && !props.children) {
      // eslint-disable-next-line 
      return new Error(`One of props 'text' or 'children' was not specified in '${componentName}'.`);
    }
    return null;
  },
  ...getDataProps(),
};

Tag.displayName = 'Plasma@Tag';

export default Tag;
