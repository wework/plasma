import React from 'react';
import style from './style.scss';

class TextInput extends React.Component {
  render() {
    return (
      <input placeholder={this.props.placeholder} className={style.input} />
    );
  }
}

TextInput.propTypes = {
  placeholder: React.PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
};

TextInput.displayName = 'TextInput';

export default TextInput;
