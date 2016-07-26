import _ from 'lodash-compat';
import React from 'react';
import cx from 'classnames';
import Plasma from '../../../src';

import style from './style.scss';

export default class PropsSection extends React.Component {
  render() {
    return(
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 8 }}>Props</h3>
        <div className={ style.table }>
          <div className={ cx(style.row, style.head) } >
            <div className={ style.cell }>Name</div>
            <div className={ style.cell }>Type</div>
            <div className={ style.cell }>Default</div>
            <div className={ style.cell }>Description</div>
          </div>
          { this.props.propData && _.map(this.props.propData, (prop, propKey) => {
            return (
              <div className={ style.row } >
                <div className={ style.cell }>{ propKey }</div>
                <div className={ style.cell }>{ prop.type && prop.type.name }</div>
                <div className={ style.cell }>{ prop.defaultValue && prop.defaultValue.value }</div>
                <div className={ style.cell }>{ prop.description && prop.description }</div>
              </div>
            );
          })} 
        </div>
      </div>
    );
  }
}