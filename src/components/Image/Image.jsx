import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './style.scss';

import {
  getDataAttrs,
  getDataProps,
} from '../../dataUtils';

const defaultImage = 'https://cdn.spacetelescope.org/archives/images/screen/s82e5407.jpg';

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      errored: false,
    };
  }

  getImageUrl() {
    const { src, fallback } = this.props;
    if (this.state.errored || !src) {
      return fallback;
    }
    return src;
  }

  handleError() {
    this.setState({ errored: true });
  }

  render() {
    const { className, data, style, altText, imageStyle, onClick } = this.props;
    const imageCn = cn(styles.image, className);
    return (
      <div
        {...getDataAttrs(data)}
        style={style}
      >
        <img
          alt={altText}
          className={imageCn}
          src={this.getImageUrl()}
          style={imageStyle}
          onError={this.handleError}
          onClick={onClick}
        />
      </div>
    );
  }
}

Image.defaultProps = {
  style: { width: 200, height: 'auto' },
  src: defaultImage,
  fallback: defaultImage,
  altText: 'Image',
};

Image.propTypes = {
  style: PropTypes.object,
  imageStyle: PropTypes.object,
  src: PropTypes.string,
  altText: PropTypes.string,
  ...getDataProps(),
};

Image.displayName = 'Plasma@Image';

export default Image;
