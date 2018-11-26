// @flow
import React, { Component } from 'react';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import style from './style.scss';

type Props = {|
  clearable: boolean,
  clearIconUrl: string,
  disabled: boolean,
  iconUrl: string,
  instructionText: string,
  onChange: ({target: {value: string}}) => void,
  onClear: (event: Event) => void,
  placeholder: string,
  value: string,
  data: Data,
|};

type State = {|
    text: string
|};

class Search extends Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search...',
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

  onChange = (event: {target: {value: string}}): void => {
    const { onChange } = this.props;

    this.setState({ text: event.target.value });

    onChange && onChange(event);
  };

  onClear = (event: Event): void => {
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
    } = this.props;

    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.container}
      >
        <div className={style.inputWrapper}>
          <span className={style.searchIconContainer}>
            <img src={iconUrl} role="presentation" />
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
              role="presentation"
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

Search.displayName = 'Plasma@Search';

export default Search;
