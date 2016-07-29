import _ from 'lodash-compat';
import React from 'react';
import Plasma from '../../../src';
import style from './style.scss';

import PropsSection from '../PropsSection/PropsSection';
import MethodsSection from '../MethodsSection/MethodsSection';

export default class ComponentSection extends React.Component {
  render() {
    return(
      <div className={ style.section }>
        { this.props && this.props.data && 
          <div>
            <div style={{ marginBottom: 24 }}>
              <a href={`#${this.props.data.componentName.toLowerCase()}`}>
                <h1 style={{ marginBottom: 8 }}>{ this.props.data.componentName }</h1>
              </a>
              <h3 style={{ marginBottom: 8 }}>Description</h3>
              <pre>{ this.props.data.description }</pre>
            </div>
            <PropsSection propData={ this.props.data.props } />
            <MethodsSection methodData={ this.props.data.methods } />
            { this.props.data.shouldRender && 
              <div className={ style.componentFrame }>
                { this.props.data.component }
              </div>
            }
          </div>
        }
        <hr style={{ marginTop: 32 }} className='rule--partial'/>
      </div>
    );
  }
}