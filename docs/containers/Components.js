import React from 'react';
import Plasma from '../../src';
import _ from 'lodash-compat';

import style from '../docs.scss';

import ComponentSection from '../components/ComponentSection/ComponentSection';
import NavMenu from '../components/NavMenu/NavMenu';
import Hero from '../components/Hero/Hero';

export default class Components extends React.Component {
  render() {
    const data = window.DOCDATA;
    return(
      <div>
        <NavMenu components={ data } >test</NavMenu>
        <div className={ style.container }>
          <div className={ style.placeholder } />
          <div className={ style.childContainer }>
            <Hero />
            { _.map(data, (compData, index) => {
              return (<ComponentSection key={index} componentData={compData} />);
            })}
          </div>
        </div>
      </div>
    );
  }
}