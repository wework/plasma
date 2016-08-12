import React from 'react';
import style from './style.scss';

class RowGroup extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        { this.props.children }
      </div>
    );
  }
}

RowGroup.defaultProps = {
  children: []
};

RowGroup.propTypes = {
  children: React.PropTypes.node
}

RowGroup.displayName = 'Molecule.RowGroup';

export default RowGroup;