import React from 'react';
import style from './style.scss';

import Base from '../Base.jsx';
import Header from '../Header/Header.jsx';

class Masthead extends React.Component {
  render() {
    let labelComp = '';
    if (this.props.label) {
      labelComp = (
        <div className={style.label}>
          <Header h3 text={this.props.label} />
        </div>
      );
    }
    let headerComp;
    if (this.props.secondary) {
      headerComp = <Header h4 text={this.props.header} />;
    } else {
      headerComp = <Header h1 text={this.props.header} />;
    }

    return (
      <div style={this.props.style} className={style.wrapper}>
        <div className={style.content}>
          { labelComp }
          { headerComp }
        </div>
        <div className={style.rule} />
      </div>
    );
  }
}

Masthead.defaultProps = {
  secondary: false,
  label: '',
  header: 'Offices & Desks',
};

Masthead.propTypes = {
  secondary: React.PropTypes.bool,
  label: React.PropTypes.string,
  header: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

Masthead.displayName = 'Masthead';

export default Base(Masthead);
