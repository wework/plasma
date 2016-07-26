import _ from 'lodash-compat';
import React from 'react';

import style from './style.scss';

export default class NavMenu extends React.Component {
  render() {
    return(
      <div className={ style.wrapper }>
        <div className={ style.headWrapper }>
          <div className={ style.head }>PLASMA</div>
        </div>
        <ol>
          { this.props.components && _.map(this.props.components, (component) => {
            return (
              <li className={ style.link }>{ component.displayName }</li>
            );
          })} 
        </ol>
      </div>
    );
  }
}