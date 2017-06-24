import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
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
      <div
        {...getDataAttrs(this.props)}
        style={this.props.style}
        className={[headerStyle]}
      >
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
  text: PropTypes.string.isRequired,
  underline: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  style: PropTypes.object,
  data: PropTypes.object,
};

Header.defaultProps = {
  text: 'Header',
};

Header.displayName = 'Plasma@Header';

export default Header;
