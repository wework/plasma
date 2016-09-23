import _ from 'lodash';
import React from 'react';
import style from './style.scss';

class Checkbox extends React.Component {
  render() {
    const id = _.uniqueId('id');
    return (
      <div className={style.wrapper}>
        <input
          className={style.original}
          type="checkbox"
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
        />
        <div className={style.faux} />
        <label htmlFor={id} className={style.text}>
          { this.props.text }
        </label>
      </div>
    );
  }
}

Checkbox.defaultProps = {
  text: 'Option',
  name: 'checkbox',
};

Checkbox.propTypes = {
  text: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
