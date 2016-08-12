import _ from 'lodash';
import React from 'react';
import cx from 'classnames';

import style from './style.scss';

export default class Hero extends React.Component {

  componentDidMount() {
    var randomness = 80;
    var threshold = 80;
    var anim_duration = 1500; //1000 = 1s

    function rgb2hex(rgb){
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

    const animate = function(){
      var randomNumRed1 = 255;
      var randomNumGreen1 = Math.round(Math.random()*30 + 190);
      var randomNumBlue1 = Math.round(Math.random()*30 + 90);
      var randomNumRed2 = 255;
      var randomNumGreen2 = Math.round(Math.random()*30 + 90);
      var randomNumBlue2 = Math.round(Math.random()*30 + 90);
      var randomNumRed3 = 100;
      var randomNumGreen3 = Math.round(Math.random()*30 + 30);
      var randomNumBlue3 = Math.round(Math.random()*150 + 155);

      $('.plasma1').velocity({
          borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        backgroundColor: rgb2hex('rgba(' + randomNumRed1 + ',' + randomNumGreen1 + ', ' + randomNumBlue1 + ')') 
        },anim_duration,animate);
      $('.plasma2').velocity({
          borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        backgroundColor: rgb2hex('rgba(' + randomNumRed2 + ',' + randomNumGreen2 + ', ' + randomNumBlue2 + ')') 
        },anim_duration,animate);
      $('.plasma3').velocity({
          borderTopLeftRadius: String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderTopRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomLeftRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
          borderBottomRightRadius:  String(Math.round((Math.random()*randomness + threshold)) + 'px'),
        backgroundColor: rgb2hex('rgba(' + randomNumRed3 + ',' + randomNumGreen3 + ', ' + randomNumBlue3 + ')') 
        },anim_duration,animate);
    }

    animate();
  }

  render() {
    return(
      <div className={ style.wrapper }>
        <div className={ style.plasmaBall }>
          <div className={ cx('plasma1', style.plasmaLayer) } />
          <div className={ cx('plasma2', style.plasmaLayer) } />
          <div className={ cx('plasma3', style.plasmaLayer) } />
        </div>
        <div className={ style.headerWrapper }>
          <div className={ style.header }>Plasma</div>
          <div className={ style.subHeader }>by WeWork</div>
        </div>
      </div>
    );
  }
}