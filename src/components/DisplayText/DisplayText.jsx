import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class DisplayText extends React.Component {
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
        className={[headerStyle]}
        {...getDataAttrs(this.props.data)}
      >
        <div className={style.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DisplayText.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string.oneOf(['default', 'extraLarge', 'large', 'medium', 'small']),
  data: PropTypes.object,
};

DisplayText.defaultProps = {
  children: 'Display text',
};

DisplayText.displayName = 'DisplayText';

export default DisplayText;
