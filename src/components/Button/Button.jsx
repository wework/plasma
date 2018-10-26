// @flow
import cx from 'classnames';
import React, { type Node } from 'react';
import { getDataAttrs } from '../../dataUtils';
import Loader from '../Loader/Loader.jsx';
import style from './style.scss';
import type { Data } from '../../types';

const variants = { PRIMARY: 'primary', SECONDARY: 'secondary', TERTIARY: 'tertiary' };
const size = { SMALL: 'small' };

type Props = {|
  label?: string,
  onClick?: (evt: MouseEvent) => void,
  type?: 'primary' | 'secondary' | 'tertiary',
  disabled: boolean,
  loading: boolean,
  children: Node,
  style?: Object,
  isSubmit?: boolean,
  size?: string,
  data?: Data,
|};

class Button extends React.Component<Props> {
  static defaultProps = {
    type: variants.PRIMARY,
    disabled: false,
    loading: false,
  };

  render() {
    const buttonStyle = cx(style.button, {
      [style.primary]: this.props.type === variants.PRIMARY,
      [style.secondary]: this.props.type === variants.SECONDARY,
      [style.tertiary]: this.props.type === variants.TERTIARY,
      [style.small]: this.props.size === size.SMALL,
      [style.loading]: this.props.loading,
      [style.disabled]: this.props.disabled,
    });

    let loaderDotStyle;
    if (this.props.type === variants.SECONDARY || this.props.type === variants.TERTIARY) {
      loaderDotStyle = { backgroundColor: '#000', opacity: '0.1' };
    }

    let contentComponent;
    if (this.props.loading) {
      contentComponent = <Loader dotStyle={loaderDotStyle} />;
    } else {
      contentComponent = this.props.label || this.props.children;
    }

    let buttonType = 'button';
    if (this.props.isSubmit) {
      buttonType = 'submit';
    }

    return (
      <button
        {...getDataAttrs(this.props.data)}
        className={cx(buttonStyle)}
        disabled={this.props.disabled}
        style={this.props.style}
        onClick={this.props.onClick}
        type={buttonType}
      >
        {contentComponent}
      </button>
    );
  }
}


Button.displayName = 'Plasma@Button';

export default Button;
