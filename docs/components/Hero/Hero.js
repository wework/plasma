import _ from 'lodash-compat';
import React from 'react';
import cx from 'classnames';

import style from './style.scss';

export default class Hero extends React.Component {

  componentDidMount() {
    var randomness = 80;
    var threshold = 85;
    var anim_duration = 1500; //1000 = 1s

    function rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

    const animate = function(){
      var randomNumRed = 255;
      var randomNumGreen = Math.round(Math.random()*30 + 190);
      var randomNumBlue = Math.round(Math.random()*30 + 90);
      $('.fluid').animate({
          borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        backgroundColor: rgb2hex('rgba(' + randomNumRed + ',' + randomNumGreen + ', ' + randomNumBlue + ')') 
        },anim_duration,animate);
    }

    animate();
  }

  render() {
    return(
      <div className={ style.wrapper }>
        <div className={ cx('fluid', style.fluid) } />
        <div className={ style.headerWrapper }>
          <div className={ style.header }>PLASMA</div>
          <div className={ style.subHeader }>BY WEWORK</div>
        </div>
      </div>
    );
  }
}