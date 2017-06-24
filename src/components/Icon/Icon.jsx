import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const Icon = ({ icon, color, data }) => {
  return (
    <div
      className={style.wrapper}
      style={{ fill: color }}
      dangerouslySetInnerHTML={{ __html: icon }}
      {...getDataAttrs(data)}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.object,
};

Icon.defaultProps = {
  size: 16,
};

Icon.displayName = 'Plasma@Icon';

export default Icon;
