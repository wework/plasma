import _ from 'lodash-compat';
import React from 'react';
import Plasma from '../../../src';
import style from './style.scss';

import PropsSection from '../PropsSection/PropsSection';
import MethodsSection from '../MethodsSection/MethodsSection';

export default class ComponentSection extends React.Component {
  render() {
    let comp = '';
    if (
      this.props &&
      this.props.componentData &&
      this.props.componentData.displayName
    ) { 
      const nameParts = this.props.componentData.displayName.split('.');
      let obj = Plasma[nameParts[0]];
      console.log(obj);
      for (let i = 1; i < nameParts.length; i++) {
        obj = obj[nameParts[i]];
        console.log(obj);
      }
      if (_.isObject(obj)) {
        comp = React.createElement(obj);
      }
    }
    return(
      <div className={ style.section }>
        { this.props && this.props.componentData && 
          <div>
            <div style={{ marginBottom: 16 }}>
              <h1 style={{ marginBottom: 8 }}>{ this.props.componentData.displayName }</h1>
              <h3 style={{ marginBottom: 8 }}>Description</h3>
              <pre>{ this.props.componentData.description }</pre>
            </div>
            <PropsSection propData={ this.props.componentData.props } />
            <MethodsSection methodData={ this.props.componentData.methods } />
            <div className={ style.componentFrame }>
              { comp }
            </div>
          </div>
        }
        <hr style={{ marginTop: 32 }} className='rule--partial'/>
      </div>
    );
  }
}