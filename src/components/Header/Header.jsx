// @flow
import cx from 'classnames';
import React, { type Node } from 'react';
import style from './style.scss';
import { getDataAttrs } from '../../dataUtils';
import type { Data, StyleAttributes } from '../../types';

type Props = {|
  text?: string,
  children?: Node,
  underline?: boolean,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  h6?: boolean,
  invert?: boolean,
  style?: StyleAttributes,
  noMargin?: boolean,
  data?: Data,
|};

class Header extends React.Component<Props> {
  render() {
    const headerStyle = cx(style.header, {
      [style.header1]: this.props.h1,
      [style.header2]: this.props.h2,
      [style.header3]: this.props.h3,
      [style.header4]: this.props.h4,
      [style.header5]: this.props.h5,
      [style.header6]: this.props.h6,
      [style.invert]: this.props.invert,
      [style.noMargin]: this.props.noMargin,
    });

    return (
      <div {...getDataAttrs(this.props.data)} className={[headerStyle]}>
        <div className={style.content}>{this.props.text || this.props.children}</div>
        {this.props.underline && <div className={style.rule} />}
      </div>
    );
  }
}

Header.displayName = 'Plasma@Header';

export default Header;
