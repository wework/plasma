import React from 'react';
import Plasma from '../../src';
import _ from 'lodash-compat';

import style from '../docs.scss';

import ComponentSection from '../components/ComponentSection/ComponentSection';
import NavMenu from '../components/NavMenu/NavMenu';
import Hero from '../components/Hero/Hero';

export default class Components extends React.Component {

  constructor() {
    super();
    this.parseDisplayNames = this.parseDisplayNames.bind(this);
    this.state = {
      metadata: {}
    }
  }

  componentWillMount() {
    this.setState({ metadata: this.parseDisplayNames(window.DOCDATA) });  
  }

  parseDisplayNames(metadata) {
    const returnObj = {};
    let _metadata = _.cloneDeep(metadata);
    _.forEach(_metadata, (value, index) => {
      let component = '';
      let shouldRender = true;
      let displayName = '';
      let atomicPart = '';
      let componentName = '';

      if (value.displayName) {
        displayName = value.displayName;
        const shouldRenderParts = displayName.split('!');
        if (shouldRenderParts.length > 1) {
          shouldRender = false;
          displayName = shouldRenderParts[shouldRenderParts.length - 1];
        }
        const nameParts = displayName.split('.');
        atomicPart = nameParts[0];
        console.log(nameParts);
        componentName = _.slice(nameParts, 1).join('.');
        let obj = Plasma[nameParts[0]];
        for (let i = 1; i < nameParts.length; i++) {
          obj = obj[nameParts[i]];
        }
        if (_.isObject(obj)) {
          component = React.createElement(obj);
        }
        const parsed = {
          atomicPart,
          componentName,
          displayName,
          component,
          shouldRender
        }
        returnObj[displayName] = _.cloneDeep(_metadata[value.displayName]);
        returnObj[displayName] = _.merge(returnObj[displayName], parsed);
      }
    });
    return returnObj;
  }

  render() {
    console.log(this.state.metadata);
    return(
      <div className={ style.fullHeight }>
        <NavMenu data={ this.state.metadata } >test</NavMenu>
        <div className={ style.container }>
          <div className={ style.placeholder } />
          <div className={ style.childContainer }>
            <Hero />
            { _.map(this.state.metadata, (data, key) => {
              return (<ComponentSection key={key} data={data} />);
            })}
          </div>
        </div>
      </div>
    );
  }
}