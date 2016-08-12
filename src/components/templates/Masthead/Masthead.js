import React from 'react';
import style from './style.scss';

import Header from '../../atoms/Header/Header';

class Masthead extends React.Component {
  render() {

    let labelComp = '';
    if (this.props.label) {
      labelComp =
        <div className={ style.label }>
          <Header h3 text={ this.props.label }></Header>
        </div>;
    }

    let headerComp;
    if (this.props.secondary) {
      headerComp = <Header h4 text={ this.props.header }/>;
    } else {
      headerComp = <Header h1 text={ this.props.header }/>;
    }

    return (
      <div style={ this.props.style } className={ style.wrapper }>
        <div className={ style.content }>
          { labelComp }
          { headerComp }
        </div>
        <div className={ style.rule } />
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
  header: React.PropTypes.string.isRequired
}

Masthead.displayName = 'Template.Masthead';

export default Masthead;