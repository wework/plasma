import React from 'react';
import cx from 'classnames';

import Base from '../Base.jsx';
import style from './style.scss';

const TextInput = (
  {
    suffix,
    prefix,
    placeholder,
    value,
    onChange,
    isDisabled,
  }
) => {
  const fixStyle = cx(style.fix, {
    [style.suffix]: suffix,
    [style.prefix]: prefix,
  });

  const wrapperStyle = cx(style.wrapper, {
    [style.disabledWrapper]: isDisabled,
  });

  const inputStyle = cx(style.input, {
    [style.disabled]: isDisabled,
  });

  return (
    <div className={wrapperStyle}>
      <input
        className={inputStyle}
        disabled={isDisabled}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {(suffix || prefix) &&
        <div className={fixStyle}>
          {suffix || prefix}
        </div>}
    </div>
  );
};

TextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  suffix: React.PropTypes.node,
  prefix: React.PropTypes.node,
  isDisabled: React.PropTypes.bool,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
  isDisabled: false,
};

TextInput.displayName = 'TextInput';

export default Base(TextInput);
