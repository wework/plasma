import React from 'react';
import style from './style.scss';

class NumberInput extends React.Component {
  render() {
    return (
      <input
        type="number"
        placeholder={this.props.placeholder}
        className={style.input}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

NumberInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

NumberInput.defaultProps = {
  placeholder: 'Type something...',
};

NumberInput.displayName = 'NumberInput';

export default NumberInput;
