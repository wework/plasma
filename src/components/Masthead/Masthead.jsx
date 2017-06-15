import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';
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
      <div
        style={this.props.style}
        className={style.wrapper}
        {...getDataAttrs(this.props.data)}
      >
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
  secondary: PropTypes.bool,
  label: PropTypes.string,
  header: PropTypes.string.isRequired,
  style: PropTypes.object,
  data: PropTypes.obj,
};

Masthead.displayName = 'Masthead';

export default Masthead;
