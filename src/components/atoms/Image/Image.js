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
  style: null,
  src: ''
};

Image.displayName = 'Atom.Image';

export default Image;