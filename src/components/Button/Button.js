import React from 'react';
import style from './style.scss';

console.log('wut');

class Button extends React.Component {
  render() {
    return (<div className={style.button}>test</div>);
  }
}

export default Button;