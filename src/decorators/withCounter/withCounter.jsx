// @flow
import React, { type ComponentType } from 'react';
import cx from 'classnames';

import styles from './style.scss';

type Props = {
  value: string,
  counterClassName?: string,
  maxLength?: string,
};

const withCounter = <P>(Component: ComponentType<P>) => {
  return class extends React.Component<Props & P> {
    render() {
      const { counterClassName, value, maxLength } = this.props;

      const counterClasses = cx(styles.counter, counterClassName);

      let counter = (value || '').length;

      if (maxLength) {
        counter += `/${maxLength}`;
      }

      counter += ' characters';

      return (
        <div>
          <div className={counterClasses}>{counter}</div>
          <Component {...this.props} />
        </div>
      );
    }
  };
};

export default withCounter;
