import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class Image extends React.Component {
  render() {
    return (
      <div
        style={this.props.style}
        {...getDataAttrs(this.props.data)}
      >
        <img
          alt={this.props.altText}
          className={style.image}
          src={this.props.src}
          style={this.props.imageStyle}
        />
      </div>
    );
  }
}

Image.defaultProps = {
  style: { width: 200, height: 'auto' },
  src: 'https://cdn.spacetelescope.org/archives/images/screen/s82e5407.jpg',
  altText: 'Image',
};

Image.propTypes = {
  style: PropTypes.object,
  imageStyle: PropTypes.object,
  src: PropTypes.string,
  altText: PropTypes.string,
  data: PropTypes.object,
};

Image.displayName = 'Image';

export default Image;
