import React from 'react';
import style from './docs.scss';

export default class Root extends React.Component {
  render() {
    return (
      <div className={ style.fullHeight }>
        { this.props.children }
      </div>
    );
  }
}
