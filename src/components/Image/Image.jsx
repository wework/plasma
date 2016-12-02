import React from 'react';

import Base from '../Base.jsx';
import style from './style.scss';

class Image extends React.Component {
  render() {
    return (
      <div
        style={this.props.style}
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
  style: React.PropTypes.object,
  imageStyle: React.PropTypes.object,
  src: React.PropTypes.string,
  altText: React.PropTypes.string,
};

Image.displayName = 'Image';

export default Base(Image);
