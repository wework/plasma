import React from 'react';
import Plasma from '../src';

import style from './docs.scss';
import NavMenu from './components/NavMenu/NavMenu';

export default class Root extends React.Component {
  render() {
    return(
      <div>
        { this.props.children }
      </div>
    );
  }
}