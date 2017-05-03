import _ from 'lodash';
import React from 'react';
import cx from 'classnames';

import Base from '../Base.jsx';
import style from './style.scss';

class RadioButton extends React.Component {
  render() {
    const id = _.uniqueId('id');
    const wrapperClasses = cx(style.wrapper, {
      [style.isLarge]: this.props.isLarge,
    });

    return (
      <div>
        <label htmlFor={id} className={wrapperClasses}>
          <input
            className={style.original}
            type="radio"
            id={id}
            name={this.props.name}
            description={this.props.description}
            onChange={this.props.onChange}
            checked={this.props.checked}
          />
          <div className={style.faux} />
          <div className={style.text}>
            <strong>{ this.props.text }</strong>
          </div>
        </label>
        <span className={style.description}>
          { this.props.description }
        </span>
      </div>
    );
  }
}

RadioButton.defaultProps = {
  text: 'Option',
  name: 'radioButton',
};

RadioButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  isLarge: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool,
};

RadioButton.displayName = 'RadioButton';

export default Base(RadioButton);
