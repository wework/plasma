import { uniqueId } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';
import style from './style.scss';

class RadioButton extends React.Component {
  render() {
    const id = uniqueId('id');
    const wrapperClasses = cx(style.wrapper, {
      [style.isLarge]: this.props.isLarge,
    });

    return (
      <div
        {...getDataAttrs(this.props.data)}
      >
        <label htmlFor={id} className={wrapperClasses}>
          <input
            className={style.original}
            type="radio"
            id={id}
            name={this.props.name}
            onChange={this.props.onChange}
            checked={this.props.checked}
          />
          <div className={style.faux} />
          <div className={style.text}>
            <strong>{ this.props.text }</strong>
          </div>
        </label>
        { this.props.description &&
          <span className={style.description}>
            { this.props.description }
          </span>
        }
      </div>
    );
  }
}

RadioButton.defaultProps = {
  text: 'Option',
  name: 'radioButton',
};

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  isLarge: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  ...getDataProps(),
};

RadioButton.displayName = 'Plasma@RadioButton';

export default RadioButton;
