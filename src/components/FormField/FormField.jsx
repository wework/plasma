// @flow
import React, {
  Component,
  type ComponentType,
  type ElementConfig
} from 'react';
import cx from 'classnames';
import {
  getDataAttrs,
} from '../../dataUtils';

import Hint from '../Hint/Hint';
import Label from '../Label/Label.jsx';

import type {
  Data,
  InputProps,
} from '../../types';

import styles from './style.scss';

type FieldProps = {|
  className?: string,
  data?: Data,
  errorMessage?: string,
  hint?: string,
  inline?: boolean,
  label?: string,
  style?: { [key: string]: any },
  ...$Exact<InputProps>
|};

type FormFieldProps<C> = {|
  ...FieldProps,
  component: C,
|};

class FormField<P: InputProps, C: ComponentType<P>>
  extends Component<FormFieldProps<ComponentType<ElementConfig<C>>> & $Diff<P, FieldProps>>
{
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
      name,
      onChange,
      required,
      style,
      value,
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
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            {...rest}
          />
          {
            showHint && (
              <Hint className={styles.hint} error={!!showError}>
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
