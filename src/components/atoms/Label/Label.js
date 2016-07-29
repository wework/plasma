import React from 'react';
import style from './style.scss';

class Label extends React.Component {
  render() {
    return (
      <div className={ style.label }>
        { this.props.text }
      </div>
    );
  }
}

Label.propTypes = {
  text: React.PropTypes.string
}

Label.defaultProps = {
  text: 'Label'
};

Label.displayName = 'Atom.Label';

export default Label;