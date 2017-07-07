import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DISABLED: 'disabled',
};

const Label = (
  {
    type,
    text,
    data,
    children,
  }
) => {
  const labelStyle = cx(style.label, {
    [style.labelSecondary]: type === types.SECONDARY,
    [style.labelDisabled]: type === types.DISABLED,
  });
  console.log(children);
  return (
    <div
      {...getDataAttrs(data)}
      className={labelStyle}
    >
      {text || children}
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.node,
};

Label.defaultProps = {
  type: types.PRIMARY,
};

Label.displayName = 'Plasma@Label';

export default Label;
