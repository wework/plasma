import React from 'react';
import style from './style.scss';

class TextInput extends React.Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={style.input}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

TextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
};

TextInput.displayName = 'TextInput';

export default TextInput;
