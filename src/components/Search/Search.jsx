import React, { Component, PropTypes } from 'react';
import Base from '../Base';
import style from './style.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.state = {
      text: '',
    };
  }

  onChange(event) {
    const { onChange } = this.props;

    this.setState({ text: event.target.value });

    onChange();
  }

  onClear() {
    const { onClear } = this.props;

    this.setState({ text: '' });

    if (onClear) {
      return onClear();
    }
  }

  render() {
    const {
      clearable,
      clearIconUrl,
      disabled,
      iconUrl,
      instructionText,
      placeholder,
    } = this.props;

    return (
      <div className={style.container}>
        <div className={style.inputWrapper}>
          <span className={style.searchIconContainer}>
            <img src={iconUrl} />
          </span>
          <input
            className={style.input}
            disabled={disabled}
            onChange={this.onChange}
            placeholder={placeholder}
            type="text"
            value={this.state.text}
          />
          {
            clearable && clearIconUrl && (this.state.text !== '') &&
            <img
              className={style.clearableIcon}
              onClick={this.onClear}
              src={clearIconUrl}
            />
          }
        </div>
        {
          instructionText &&
          <div className={style.instructionText}>
            {instructionText}
          </div>
        }
      </div>
    );
  }
}

Search.propTypes = {
  clearable: PropTypes.bool,
  clearIconUrl: PropTypes.string,
  disabled: PropTypes.bool,
  iconUrl: PropTypes.string.isRequired,
  instructionText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
