// @flow
/* eslint react/prop-types: 0 */
import React, { type Node } from 'react';
import { getDataAttrs } from '../../../dataUtils';
import type { Data } from '../../../types';
import style from './style.scss';


type State = {|
    fixedHeight: number,
|};

type Props = {|
    children: Array<Node>,
    backgroundColor: string,
    data: Data,
|};

class FixedTop extends React.Component<Props, State> {

  static defaultProps = {
    children: ['', ''],
    backgroundColor: 'transparent',
  };

  constructor() {
    super();
    this.state = {
      fixedHeight: 0,
    };
  }

  componentDidMount() {
    this.setState({ fixedHeight: this.fixed.offsetHeight });
  }
  fixed: any;
  render() {
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={style.wrapper}
      >
        <div
          className={style.fixedWrapper}
          ref={(c) => (this.fixed = c)}
        >
          { this.props.children[0] }
        </div>
        <div className={style.contentWrapper}>
          <div
            className={style.stub}
            style={{ height: this.state.fixedHeight, minHeight: this.state.fixedHeight }}
          />
          <div className={style.content} style={{ backgroundColor: this.props.backgroundColor }}>
            { this.props.children[1] }
          </div>
        </div>
      </div>
    );
  }
}

FixedTop.defaultProps = {
  children: ['', ''],
  backgroundColor: 'transparent',
};

FixedTop.displayName = '!Plasma@FixedTop';

export default FixedTop;
