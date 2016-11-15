import React from 'react';
import cx from 'classnames';
import style from './style.scss';

import Label from '../../Label/Label.jsx';

const labelType = { PRIMARY: 'primary', SECONDARY: 'secondary' };

class FormField extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Label text={this.props.label} type={this.props.labelType} />
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
};

FormField.displayName = 'FormField';

export default FormField;
