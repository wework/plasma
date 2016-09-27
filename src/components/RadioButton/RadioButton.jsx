import _ from 'lodash';
import React from 'react';
import style from './style.scss';

class RadioButton extends React.Component {
  render() {
    const id = _.uniqueId('id');
    return (
      <div className={style.wrapper}>
        <input
          className={style.original}
          type="radio"
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
          checked={this.props.checked}
        />
        <div className={style.faux} />
        <label htmlFor={id} className={style.text}>
          { this.props.text }
        </label>
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
  onChange: React.PropTypes.func,
  checked: React.PropTypes.boolean,
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
