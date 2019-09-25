// @flow
import React from 'react';
import cn from 'classnames';
import styles from './style.scss';

import { getDataAttrs } from '../../dataUtils';
import type { Data, StyleAttributes } from '../../types';

const defaultImage = 'https://cdn.spacetelescope.org/archives/images/screen/s82e5407.jpg';

type Props = {|
  style?: StyleAttributes,
  imageStyle?: StyleAttributes,
  src: string,
  altText?: string,
  data?: Data,
  onClick?: (evt: MouseEvent) => void,
  className?: string,
  fallback?: string,
  onLoad?: (evt: MouseEvent) => void,
|};

type State = {|
  errored: boolean,
|};

class Image extends React.Component<Props, State> {
  static defaultProps = {
    style: { width: '200px', height: 'auto' },
    src: defaultImage,
    fallback: defaultImage,
    altText: 'Image',
  };

  state = {
    errored: false,
  };

  getImageUrl() {
    const { src, fallback } = this.props;
    if (this.state.errored || !src) {
      return fallback;
    }
    return src;
  }

  handleError = () => {
    this.setState({ errored: true });
  };

  render() {
    const { className, data, style, altText, imageStyle, onClick, onLoad } = this.props;
    const imageCn = cn(styles.image, className);
    return (
      <div {...getDataAttrs(data)} style={style}>
        <img
          alt={altText}
          className={imageCn}
          src={this.getImageUrl()}
          style={imageStyle}
          onError={this.handleError}
          onClick={onClick}
          onLoad={onLoad}
        />
      </div>
    );
  }
}

Image.displayName = 'Plasma@Image';

export default Image;
