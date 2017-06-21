import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const Icon = ({ name, color, data }) => {
  return (
    <div
      className={style.wrapper}
      style={{ fill: color }}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
      {...getDataAttrs(data)}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.object,
};

Icon.defaultProps = {
  name: 'placeholder',
  size: 16,
};

Icon.displayName = 'Icon';

export default Icon;
