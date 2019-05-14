// @flow
import React, { Component } from 'react';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  clearable?: boolean,
  clearIconUrl?: string,
  disabled?: boolean,
  iconUrl: string,
  instructionText?: string,
  onChange?: (event: SyntheticEvent<HTMLInputElement>) => void,
  onKeyDown?: (event: SyntheticEvent<HTMLInputElement>) => void,
  onClear?: (event: SyntheticEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: string,
  data?: Data,
  autoFocus?: boolean,
|};

type State = {|
  text: string,
|};

class Search extends Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search...',
    onKeyDown: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const { value } = nextProps;

    if (value !== this.props.value) {
      this.setState({ text: value });
    }
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const { onChange } = this.props;

    this.setState({ text: event.currentTarget.value });

    onChange && onChange(event);
  };

  onClear = (event: SyntheticEvent<HTMLInputElement>): void => {
    const { onClear } = this.props;

    this.setState({ text: '' });

    if (onClear) {
      onClear(event);
    }
  };

  render() {
    const {
      clearable,
      clearIconUrl,
      disabled,
      iconUrl,
      instructionText,
      placeholder,
      autoFocus,
    } = this.props;

    return (
      <div {...getDataAttrs(this.props.data)} className={style.container}>
        <div className={style.inputWrapper}>
          <span className={style.searchIconContainer}>
            <img src={iconUrl} role="presentation" />
          </span>
          <input
            className={style.input}
            disabled={disabled}
            onChange={this.onChange}
            onKeyDown={this.props.onKeyDown}
            placeholder={placeholder}
            type="text"
            value={this.state.text}
            autoFocus={autoFocus}
          />
          {clearable && clearIconUrl && this.state.text !== '' && (
            <img
              className={style.clearableIcon}
              onClick={this.onClear}
              src={clearIconUrl}
              role="presentation"
            />
          )}
        </div>
        {instructionText && <div className={style.instructionText}>{instructionText}</div>}
      </div>
    );
  }
}

Search.displayName = 'Plasma@Search';

export default Search;
