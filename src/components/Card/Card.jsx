import cx from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

const type = { CONDENSED: 'condensed' };
const borderType = { DASHED: 'dashed' };

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
    const cardStyle = cx(style.card, {
      [style.condensed]: this.props.type === type.CONDENSED,
      [style.borderDashed]: this.props.borderType === borderType.DASHED,
      [style.isExpanded]: this.props.isExpanded,
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
        {...getDataAttrs(this.props)}
        ref={(c) => { this.outer = c; }}
        className={cardStyle}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        <div className={style.inner}>
          <div
            ref={(c) => { this.default = c; }}
            className={style.default}
            style={{ maxHeight: defaultHeight }}
          >
            { this.props.children }
          </div>
          { this.props.expandedComponent &&
            <div
              ref={(c) => { this.expanded = c; }}
              className={style.expanded}
              style={{ maxHeight: expandedHeight }}
            >
              { this.props.expandedComponent }
            </div>
          }
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  children: 'Lorem ipsum',
  style: {},
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  borderType: PropTypes.string,
  expandedComponent: PropTypes.node,
  isExpanded: PropTypes.bool,
  data: PropTypes.object,
};

Card.displayName = 'Card';

export default Card;
