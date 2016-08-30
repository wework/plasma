import React from 'react';
import style from './style.scss';

import Label from '../../components/Label/Label.jsx';

class FormField extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.label}>
          <Label text={this.props.label} />
        </div>
        <div className={style.input}>
          { this.props.children }
        </div>

      </div>
    );
  }
}

FormField.defaultProps = {
  label: 'Label',
  children: '',
};

FormField.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

FormField.displayName = 'FormField';

export default FormField;
