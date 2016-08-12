import _ from 'lodash';
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
        <table className={ style.table }>
          <thead className={ cx(style.row, style.head) }>
            <tr>
              <th className={ style.cell }>Name</th>
              <th className={ style.cell }>Params</th>
              <th className={ style.cell }>Description</th>
            </tr>
          </thead>
          { this.props.methodData && _.map(this.props.methodData, (method) => {
            return (
              <tbody>
                <tr className={ style.row }>
                  <td className={ style.cell }>{ method.name }</td>
                  <td className={ style.cell }>
                    { method.params && method.params.map(p => p.name).join(', ') }
                  </td>
                  <td className={ style.cell }>{ method.htmlDescription }</td>
                </tr>
              </tbody>
            );
          })} 
        </table>
      </div>
    } else {
      comp = null;
    }
    return comp;
  }
}