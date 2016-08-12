import _ from 'lodash';
import React from 'react';
import style from './style.scss';
import cx from 'classnames';

import TableHeader from './TableHeader';

class Table extends React.Component {

  constructor() {
    super();
    this.state = {
      columnSizes: {},
      tableWidth: 0,
      backgroundColor: null,
      stickyCoverHeight: 0,
      translateY: 0,
      showSticky: false
    };
    this.headerComponents = {};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleWindowResize = _.throttle(this.handleWindowResize, 100).bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    if (!_.isNull(this.props.stickAt)) {
      $(document).on('scroll', this.handleScroll);
      $(window).on('resize', this.handleWindowResize);
      const init = () => {
        this.handleWindowResize();
        this.handleScroll();
      };
      this.calculateSizes(init);
    } else {
      this.calculateSizes();
    }
  }

  componentDidUpdate() {
    if (!_.isNull(this.props.stickAt)) {
      this.calculateSizes();
    }
  }

  componentWillUnmount() {
    $(document).off('scroll', this.handleScroll);
    $(window).off('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.fixedHeight = $(window).height();
    this.calculateSizes();
    this.handleScroll();
  }

  handleScroll() {
    if (!_.isNull(this.props.stickAt)) {
      const tableTopOffset = this.table.getBoundingClientRect().top;
      const tableBottomOffset = this.table.getBoundingClientRect().bottom;
      const viewportHeight = $(window).height();
      console.log(viewportHeight, tableBottomOffset);
      const topAtOrAboveStickyPoint =
        tableTopOffset + this.state.headerHeight < this.props.stickAt;
      const bottomAtOrAboveStickyPoint =
        tableBottomOffset < this.props.stickAt;
      let isVisible = false;
      console.log('topAbove', topAtOrAboveStickyPoint);
      console.log('bottomAbove', bottomAtOrAboveStickyPoint);
      if (topAtOrAboveStickyPoint && !bottomAtOrAboveStickyPoint) {
        isVisible = true;
      }
      $(this.fixed)
        .css('height', `${ this.props.stickAt }px`)
        .css('opacity', isVisible ? 1 : 0);
    }
  }

  updateState(newState, callback) {
    // only update the state if it changed to save on updates
    // and prevent a render loop
    if ( !_(this.state).pick(_.keys(newState)).isEqual(newState) ) {
      this.setState(newState, callback);
    }
  }

  renderHeader(opts={}) {
    const headerComponents = _.map(this.props.header, (value, key) => {
      let colStyles = {};
      if (opts.sticky && this.state.columnSizes[key]) {
        colStyles = { width: this.state.columnSizes[key].width };
      }
      return (
        <th
          className={ style.cell }
          style={ colStyles }
          key={ key }
          ref={(c) => {
            if (!opts.sticky) {
              this.headerComponents[key] = c;
            }
          }}
        >
          { value }
        </th>
      );
    });
    return (<thead><tr className={ cx(style.row, style.header) }>{ headerComponents }</tr></thead>);
  }

  renderStickyHeader() {
    return this.renderHeader({ sticky: true });
  }

  calculateSizes(callback) {
    const headerSizes = {};
    let maxHeaderHeight = 0;
    _.forEach(this.headerComponents, (value, key) => {
      const width = $(value).innerWidth();
      const height = $(value).innerHeight();
      headerSizes[key] = { width, height };
      if (height > maxHeaderHeight) {
        maxHeaderHeight = height;
      }
    });
    const tableWidth = $(this.table).outerWidth() + 1;
    this.updateState({ columnSizes: headerSizes, headerHeight: maxHeaderHeight, tableWidth }, callback);
  }

  renderItems() {
    const itemComponents = _.map(this.props.items, (itemValue, itemIndex) => {
      const columnComponents = _.map(itemValue, (columnValue, columnKey) => {
        return (
          <td className={ style.cell } key={ columnKey }>{ columnValue }</td>
        );
      });
      const rowComponent = <tr className={ style.row } key={ itemIndex }>{ columnComponents }</tr>;
      return rowComponent;
    });
    return <tbody className={ style.tbody }>{ itemComponents }</tbody>;
  }

  render() {
    return (
      <div style={ this.props.style } className={ style.wrapper }>
        { !_.isNull(this.props.stickAt) &&
          <div
            ref={ (c) => { this.fixed = c; } }
            className={ cx(style.table, style.sticky) }
            style={{
              backgroundColor: this.state.backgroundColor,
              width: this.state.tableWidth
            }}
          >
            <table
              style={{
                width: this.state.tableWidth,
              }}
            >
              { this.renderStickyHeader() }
            </table>
          </div>
        }
        <table
          ref={ (c) => { this.table = c; } }
          className={ style.table }
        >
          { this.renderHeader() }
          { this.renderItems() }
        </table>
      </div>
    );
  }
}

Table.defaultProps = {
  stickAt: null
};

Table.displayName = 'Organism.Table';

export default Table;
