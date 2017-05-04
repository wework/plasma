import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Base from '../Base.jsx';
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
  }
) => {
  const labelStyle = cx(style.label, {
    [style.labelSecondary]: type === types.SECONDARY,
    [style.labelDisabled]: type === types.DISABLED,
  });

  return (
    <div className={labelStyle}>
      {text}
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

Label.defaultProps = {
  text: 'Label',
  type: types.PRIMARY,
};

Label.displayName = 'Label';

export default Base(Label);
