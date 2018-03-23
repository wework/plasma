import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { getDataAttrs, getDataProps } from '../../dataUtils';
import style from './style.scss';

import Header from '../Header/Header';

const cardTypes = {
  REGULAR: 'regular',
  CONDENSED: 'condensed',
};
const borderTypes = { DASHED: 'dashed' };

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: false,
    };
  }

  componentDidMount() {
    /* eslint-disable */
    if (this.props.expandedComponent) {
      const defaultEl = ReactDOM.findDOMNode(this.default);
      const defaultHeight = defaultEl.offsetHeight;
      const expandedEl = ReactDOM.findDOMNode(this.expanded);
      const expandedHeight = expandedEl.offsetHeight;
      this.setState({ defaultHeight, expandedHeight });
    }
    this.setState({ isMounted: true });
    /* eslint-enable */
  }

  render() {
    const {
      title,
      actions,
      children,
      expandedComponent,
      onClick,
      data,
      isExpanded,
      borderType,
      borderColorRed,
      type,
      minWidth,
    } = this.props;

    const cardStyle = cx(style.card, {
      [style.condensed]: type === cardTypes.CONDENSED,
      [style.borderDashed]: borderType === borderTypes.DASHED,
      [style.borderColorRed]: borderColorRed,
      [style.isExpanded]: isExpanded,
    });

    let defaultHeight = 'auto';
    let expandedHeight = 'auto';

    if (this.state.isMounted) {
      if (this.props.isExpanded) {
        defaultHeight = 0;
        expandedHeight = this.state.expandedHeight;
      } else {
        defaultHeight = this.state.defaultHeight;
        expandedHeight = 0;
      }
    }

    return (
      <div
        ref={c => {
          this.outer = c;
        }}
        className={cardStyle}
        style={{ minWidth }}
        onClick={onClick}
        {...getDataAttrs(data)}
      >
        <div className={style.inner}>
          {(title || actions) && (
            <div className={style.top}>
              {title && <Header h4>{title}</Header>}
              {actions && <div className={style.cardActions}>{actions.map(action => action)}</div>}
            </div>
          )}
          <div
            ref={c => {
              this.default = c;
            }}
            className={style.default}
            style={{ maxHeight: defaultHeight }}
          >
            {children}
          </div>
          {expandedComponent && (
            <div
              ref={c => {
                this.expanded = c;
              }}
              className={style.expanded}
              style={{ maxHeight: expandedHeight }}
            >
              {expandedComponent}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {};

Card.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([cardTypes.REGULAR, cardTypes.CONDENSED]),
  onClick: PropTypes.func,
  borderType: PropTypes.string,
  borderColorRed: PropTypes.bool,
  expandedComponent: PropTypes.node,
  isExpanded: PropTypes.bool,
  minWidth: PropTypes.number,
  ...getDataProps(),
};

Card.displayName = 'Plasma@Card';

export default Card;
