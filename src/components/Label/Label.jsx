import React from 'react';
import cx from 'classnames';
import style from './style.scss';

const type = { PRIMARY: 'primary', SECONDARY: 'secondary' };

class Label extends React.Component {
  render() {
    const labelStyle = cx(style.label, {
      [style.labelSecondary]: this.props.type === type.SECONDARY,
    });
    console.log(labelStyle);
    return (
      <div className={labelStyle}>
        { this.props.text }
      </div>
    );
  }
}

Label.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.string,
};

Label.defaultProps = {
  text: 'Label',
  type: type.PRIMARY,
};

Label.displayName = 'Label';

export default Label;
