// @flow
import React, {
  Component,
  type Node,
} from 'react';
import cx from 'classnames';
import Autocomplete from 'react-autocomplete';

import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';
import styles from './style.scss';

type Hash<V> = { [key: string]: V };

type Item = {| value: string, label: string |} & Hash<any>;

type Props = {|
  autoHighlight?: boolean,
  clearable: boolean,
  clearIcon: Node,
  data: Data,
  disabled: boolean,
  getItemValue: (item: Item) => string,
  icon: Node,
  isItemSelectable: (item: Item) => boolean,
  items: Array<Item>,
  onChange: (value: string) => void,
  onClear: () => void,
  onMenuVisibilityChange: (isOpen: boolean) => void,
  onSelect?: (value: string, item: Item) => void,
  open?: boolean,
  placeholder: string,
  selectOnBlur?: boolean,
  shouldItemRender?: (item: Item, value: string) => boolean,
  sortItems?: (itemA: Item, itemB: Item, value: string) => number,
  renderInput?: (props: Hash<any>) => Node,
  renderItem: (item: Item, isHighlighted: boolean, styles: Hash<any>) => Node,
  renderMenu?: (items: Array<Node>, value: string, styles: Hash<any>) => Node,
  value?: string,
|};

type State = {|
  value: ?string,
|};

class Search extends Component<Props, State> {
  static defaultProps = {
    clearable: true,
    clearIcon: <span className={styles.defaultClearIcon}>&times;</span>,
    getItemValue: (item: Item): string => item.value,
    renderItem: (item: Item, isHighlighted: boolean): Node => {
      const classes = cx(styles.defaultItem, {
        [styles.defaultItemHighlighted]: isHighlighted,
      });

      return <div key={item.value} className={classes}>{item.label}</div>;
    },
    renderMenu: (children: Array<Node>, value: string): Node => {
      const showEmpty = value && !children.length;

      return (
        <div className={styles.defaultMenu}>
          {
            showEmpty ?
              (
                <div className={cx(styles.defaultItem, styles.defaultItemEmpty)}>
                  No results found
                </div>
              ) :
              children
          }
        </div>
      );
    },
    shouldItemRender(item: Item, value: string): boolean {
      return item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    },
  };

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(nextProps: Props) {
    const { value } = nextProps;

    if (value !== this.props.value) {
      this.setState({ value });
    }
  }

  handleChange = (evt: SyntheticKeyboardEvent<HTMLInputElement>, value: string): void => {
    const {
      onChange,
    } = this.props;

    this.setState({ value: evt.target.value });

    onChange && onChange(value);
  };

  handleSelect = (value: string, item: Item): void => {
    const {
      onSelect,
    } = this.props;

    this.setState({
      value,
    });

    onSelect && onSelect(value, item);
  };

  handleClear = (): void => {
    const {
      onClear,
    } = this.props;

    this.setState({ value: '' });

    onClear && onClear();
  };

  render() {
    const {
      clearable,
      clearIcon,
      data,
      disabled,
      icon,
      placeholder,
      ...rest
    } = this.props;

    const showClearIcon = clearable && this.state.value;
    const showInputIcon = !!icon;

    const wrapperProps = {
      ...getDataAttrs(data),
      style: {},
      className: styles.inputWrapper,
    };

    const inputProps = {
      className: cx(styles.input, {
        [styles.inputHasIcon]: showInputIcon,
        [styles.inputHasClearIcon]: showClearIcon,
      }),
      disabled,
      placeholder,
    };

    return (
      <div
        {...getDataAttrs(data)}
        className={styles.container}
      >
        {
          showInputIcon && (
            <div className={cx(styles.iconContainer, styles.inputIconContainer)}>
              {icon}
            </div>
          )
        }
        {
          showClearIcon && (
            <button
              className={cx(styles.iconContainer, styles.clearableIconContainer)}
              onClick={this.handleClear}
            >
              {clearIcon}
            </button>
          )
        }
        <Autocomplete
          {...rest}
          wrapperProps={wrapperProps}
          inputProps={inputProps}
          value={this.state.value}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

Search.displayName = 'Plasma@Search';

export default Search;
