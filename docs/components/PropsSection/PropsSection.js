import _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import Plasma from '../../../src';

import style from './style.scss';

export default class PropsSection extends React.Component {
  render() {
    return(
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 8 }}>Props</h3>
        <table className={ style.table }>
          <thead className={ cx(style.row, style.head) } >
            <tr>
              <th className={ style.cell }>Name</th>
              <th className={ style.cell }>Type</th>
              <th className={ style.cell }>Default</th>
              <th className={ style.cell }>Description</th>
            </tr>
          </thead>
          { this.props.propData && _.map(this.props.propData, (prop, propKey) => {
            return (
              <tbody>
                <tr className={ style.row } >
                  <td className={ style.cell }>{ propKey }</td>
                  <td className={ style.cell }>{ prop.type && prop.type.name }</td>
                  <td className={ style.cell }>{ prop.defaultValue && prop.defaultValue.value }</td>
                  <td className={ style.cell }>{ prop.description && prop.description }</td>
                </tr>
              </tbody>
            );
          })} 
        </table>
      </div>
    );
  }
}