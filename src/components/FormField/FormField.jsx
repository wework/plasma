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
  ...$Exact<InputProps>
|};

type FormFieldProps<C> = {|
  ...FieldProps,
  component: C,
|};

// This component expects to receive a `component` prop which is a kind of input component.
// It is expected for any such component passed to implement the interface defined in InputProps.
//
// The definition of this component is based on:
// https://flow.org/en/docs/react/hoc/#toc-supporting-defaultprops-with-react-elementconfig
//
// `P` is the _passed component_'s Props type such that it implements `InputProps`, and `C` will
// be the component's type.
//
// The FormField component itself is then defined such that its props will contain:
// - The expected component as `ComponentType<ElementConfig<C>>`.
// - `$Diff<P, FieldProps>` allows any props from the inner component to be set on the FormField component,
//   and those will be passed through to the inner component.

// By using `ElementConfig` we also take into consideration the component's `defaultProps`, so Flow will not break
// on any props marked as required which have default values (see above link).
//
// In other words, if the inner component has a _required_ prop `foo` with a default prop value, Flow will allow `foo`
// to remain optional on FormField.
// For example:
//
// ```jsx
// type FooProps = {|
//   foo: string,
// |};
//
// class Foo extends Component<FooProps> {
//   static defaultProps = {
//     foo: 'bar',
//   };
//
//   ...
// }
//
// // This will be OK:
// <FormField component={Foo} />
//
// // This will also be OK:
// <FormField component={Foo} foo="bar2" />
// ```
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
