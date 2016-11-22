import React from 'react';
import cx from 'classnames';
import style from './style.scss';

class TextInput extends React.Component {
  render() {
    const fixStyle = cx(style.fix, {
      [style.suffix]: this.props.suffix,
      [style.prefix]: this.props.prefix,
    });

    return (
      <div className={style.wrapper}>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className={style.input}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        { (this.props.suffix || this.props.prefix) &&
          <div className={fixStyle}>
            {this.props.suffix || this.props.prefix}
          </div>
        }
      </div>
    );
  }
}

TextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  suffix: React.PropTypes.node,
  prefix: React.PropTypes.node,
};

TextInput.defaultProps = {
  placeholder: 'Type something...',
};

TextInput.displayName = 'TextInput';

export default TextInput;
