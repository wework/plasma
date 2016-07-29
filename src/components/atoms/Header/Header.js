import cx from 'classnames';
import React from 'react';
import style from './style.scss';

class Header extends React.Component {
  render() {

    let headerStyle = cx(style.header, {
      [style.header1]: this.props.h1,
      [style.header2]: this.props.h2,
      [style.header3]: this.props.h3,
      [style.header4]: this.props.h4,
      [style.header5]: this.props.h5,
      [style.header6]: this.props.h6,
    });

    return (
      <div className={ headerStyle }>
        { this.props.children }
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.string.isRequired
}

Header.defaultProps = {
  children: 'Header'
};

Header.displayName = 'Atom.Header';

export default Header;