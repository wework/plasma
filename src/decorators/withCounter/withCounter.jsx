// @flow
import React, { type ComponentType } from 'react';
import cx from 'classnames';
import style from './style.scss';

type Props = {
  value: string,
  counterStyle: any,
  maxLength: string,
};

const withCounter = (Component: ComponentType<Object>) => {
  return class extends React.Component<Props> {
    render() {
      const wrapperStyle = cx(style.wrapper, {
        [this.props.counterStyle]: this.props.counterStyle,
      });
      return (
        <div>
          <div className={wrapperStyle}>
            {this.props.value ? this.props.value.length : 0}
            {this.props.maxLength && `/${this.props.maxLength}`} characters
          </div>
          <Component {...this.props} />
        </div>
      );
    }
  };
};

export default withCounter;
