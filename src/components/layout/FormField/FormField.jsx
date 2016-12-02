import React from 'react';
import cx from 'classnames';

import Base from '../../Base.jsx';
import style from './style.scss';
import Label from '../../Label/Label.jsx';

const labelType = { PRIMARY: 'primary', SECONDARY: 'secondary' };

class FormField extends React.Component {
  render() {
    let labelText = this.props.label;
    if (this.props.isRequired) {
      labelText += ' *';
    }
    return (
      <div className={style.wrapper}>
        <Label text={labelText} type={this.props.labelType} />
        <div className={style.input}>
          { this.props.children }
        </div>

      </div>
    );
  }
}

FormField.defaultProps = {
  label: 'Label',
  labelType: labelType.PRIMARY,
  children: '',
};

FormField.propTypes = {
  label: React.PropTypes.string,
  labelType: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  isRequired: React.PropTypes.bool,
};

FormField.displayName = 'FormField';

export default Base(FormField);
