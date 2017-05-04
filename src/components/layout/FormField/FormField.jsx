import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Base from '../../Base.jsx';
import style from './style.scss';
import Label from '../../Label/Label.jsx';

const labelType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const FormField = (
  {
    children,
    isDisabled,
    isRequired,
    labelType,
    label,
  }
) => {
  let labelText = label;

  if (isRequired) {
    labelText += ' *';
  }

  return (
    <div className={style.wrapper}>
      <Label
        text={labelText}
        type={labelType}
        className={style.disabled}
        type={isDisabled ? 'disabled' : 'primary'}
      />
      <div className={style.input}>
        {children}
      </div>

    </div>
  );
};

FormField.defaultProps = {
  children: '',
  disabled: false,
  label: 'Label',
  labelType: labelType.PRIMARY,
};

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  labelType: PropTypes.string,
};

FormField.displayName = 'FormField';

export default Base(FormField);
