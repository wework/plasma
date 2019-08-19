// @flow
import React from 'react';
import RadioButton from '../RadioButton/RadioButton';

type Option = {|
  description?: string,
  disabled?: boolean,
  icon?: string,
  label: string,
  value: string,
|};

type Props = {|
  fancy?: boolean,
  isLarge?: boolean,
  name: string,
  onChange: () => mixed,
  options: Array<Option>,
  value?: string,
|};

class RadioButtonGroup extends React.Component<Props> {
  static defaultProps = {
    value: null,
  };
  renderRadioButtons = (): React$Node => {
    const { options, value, fancy, isLarge, name, onChange } = this.props;
    // TODO: replace fieldValue with value={opt.value}
    return (
      options &&
      options.map((opt: Option) => (
        <RadioButton
          checked={value === opt.value}
          description={opt.description}
          disabled={opt.disabled}
          icon={opt.icon}
          key={opt.value}
          text={opt.label}
          fieldValue={opt.value}
          fancy={fancy}
          isLarge={isLarge}
          name={name}
          onChange={onChange}
        />
      ))
    );
  };

  render() {
    return <div>{this.renderRadioButtons()}</div>;
  }
}

RadioButtonGroup.displayName = 'Plasma@RadioButtonGroup';

export default RadioButtonGroup;
