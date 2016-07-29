import React from 'react';
import style from './style.scss';

class Image extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <img className={style.image} src={this.props.src} />
      </div>
    );
  }
}

Image.defaultProps = {
  style: { width: 200, height: 'auto' },
  src: 'https://cdn.spacetelescope.org/archives/images/screen/s82e5407.jpg'
};

Image.propTypes = {
  style: React.PropTypes.object,
  src: React.PropTypes.string
}

Image.displayName = 'Atom.Image';

export default Image;