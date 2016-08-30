import cx from 'classnames';
import React from 'react';
import style from './style.scss';

class Header extends React.Component {
  render() {
    const headerStyle = cx(style.header, {
      [style.header1]: this.props.h1,
      [style.header2]: this.props.h2,
      [style.header3]: this.props.h3,
      [style.header4]: this.props.h4,
      [style.header5]: this.props.h5,
      [style.header6]: this.props.h6,
    });

    return (
      <div style={this.props.style} className={[headerStyle]}>
        <div className={style.content}>
          {this.props.text}
        </div>
        { this.props.underline &&
          <div className={style.rule} />
        }
      </div>
    );
  }
}

Header.propTypes = {
  text: React.PropTypes.string.isRequired,
  underline: React.PropTypes.bool,
  h1: React.PropTypes.bool,
  h2: React.PropTypes.bool,
  h3: React.PropTypes.bool,
  h4: React.PropTypes.bool,
  h5: React.PropTypes.bool,
  h6: React.PropTypes.bool,
  style: React.PropTypes.object,
};

Header.defaultProps = {
  text: 'Header',
};

Header.displayName = 'Header';

export default Header;
