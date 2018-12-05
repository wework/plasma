// @flow
import React, {
  Component,
  type ComponentType,
} from 'react';
import cx from 'classnames';
import {
  getDataAttrs,
} from '../../../dataUtils';

import Hint from '../../Hint/Hint';
import Label from '../../Label/Label.jsx';

import type { Data } from '../../../types';

import styles from './style.scss';

type Props = {|
  className?: string,
  component: ComponentType<*>,
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  errorMessage?: string,
  hint?: string,
  id?: string,
  inline?: boolean,
  onChange: (SyntheticEvent<*>) => void,
  label?: string,
  name?: string,
  required?: boolean,
  style?: { [key: string]: any },
  value?: any,
|};

// This component must be a class component, in case some inner component uses refs.
// See: https://reactjs.org/warnings/refs-must-have-owner.html
class FormField extends Component<Props> {
  render() {
    const {
      className,
      component: WrappedComponent,
      disabled,
      data,
      error,
      errorMessage,
      hint,
      inline,
      label,
      required,
      style,
      ...rest
    } = this.props;

    const showError = error && errorMessage;
    const showHint = hint || showError;

    const classes = cx(styles.formfield, className, {
      [styles.formfieldInline]: inline,
    });

    return (
      <div
        {...getDataAttrs(data)}
        className={classes}
        style={style}
      >
        {
          label && (
            <Label
              className={styles.label}
              disabled={disabled}
              required={required}
              text={label}
              inline={inline}
            />
          )
        }
        <div className={styles.control}>
          <WrappedComponent
            disabled={disabled}
            error={error}
            {...rest}
          />
          {
            showHint && (
              <Hint className={styles.hint} error={showError}>
                {showError ? errorMessage : hint}
              </Hint>
            )
          }
        </div>
      </div>
    );
  }
}

FormField.displayName = 'Plasma@FormField';

export default FormField;
