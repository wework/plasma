import _ from 'lodash';
import React from 'react';
import Plasma from '../../../src';
import style from './style.scss';

import PropsSection from '../PropsSection/PropsSection';
import MethodsSection from '../MethodsSection/MethodsSection';

export default class ComponentSection extends React.Component {

  render() {
    return(
      <div className={ style.section } id={`${this.props.data.displayName}`}>
        { this.props && this.props.data && 
          <div>
            <div style={{ marginBottom: 24 }}>
              <a href={`/plasma/docs/#${this.props.data.displayName}`}>
                <h1 style={{ marginBottom: 8 }}>{ this.props.data.displayName }</h1>
              </a>
              <h3 style={{ marginBottom: 8 }}>Description</h3>
              <div
                className={ style.description }
                dangerouslySetInnerHTML={ { __html: this.props.data.htmlDescription } }
              />
            </div>
            <PropsSection propData={ this.props.data.props } />
            <MethodsSection methodData={ this.props.data.methods } />
            { this.props.data.shouldRender && 
              <div>
                <h3 style={{ marginBottom: 8 }}>Preview</h3>
                <div className={ style.componentFrame }>
                  { this.props.data.component }
                </div>
              </div>
            }
          </div>
        }
        <hr style={{ marginTop: 32 }} className='rule--partial'/>
      </div>
    );
  }
}