import _ from 'lodash-compat';
import React from 'react';
import cx from 'classnames';
import Plasma from '../../../src';

import style from './style.scss';

export default class MethodsSection extends React.Component {
  render() {
    let comp;
    if ( this.props.methodData && this.props.methodData.length > 0) {
      comp = <div style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 8 }}>Methods</h3>
        <div className={ style.table }>
          <div className={ cx(style.row, style.head) }>
            <div className={ style.cell }>Name</div>
            <div className={ style.cell }>Params</div>
            <div className={ style.cell }>Description</div>
          </div>
          { this.props.methodData && _.map(this.props.methodData, (method) => {
            return (
              <div className={ style.row }>
                <div className={ style.cell }>{ method.name }</div>
                <div className={ style.cell }>
                  { method.params && method.params.map(p => p.name).join(', ') }
                </div>
                <div className={ style.cell }>{ method.description }</div>
              </div>
            );
          })} 
        </div>
      </div>
    } else {
      comp = null;
    }
    return comp;
  }
}