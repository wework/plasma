// @flow
export type Data = {
  key: string,
  value: string,
};

export type InputProps = {
  disabled?: boolean,
  name?: string,
  required?: boolean,
  error?: boolean,
  onChange?: (evt: SyntheticInputEvent<*>, value?: string) => void,
  value?: string,
};
