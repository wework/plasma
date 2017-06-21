import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import $ from 'jquery';
import getDataAttrs from '../../getDataAttrs';
import style from './style.scss';

class Table extends React.Component {

  constructor() {
    super();
    this.state = {
      columnSizes: {},
      tableWidth: 0,
      backgroundColor: null,
      stickyCoverHeight: 0,
      translateY: 0,
      showSticky: false,
    };
    this.headerComponents = {};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleWindowResize = _.throttle(this.handleWindowResize, 100).bind(this);
    this.handleColumnMouseEnter = this.handleColumnMouseEnter.bind(this);
    this.handleColumnMouseLeave = this.handleColumnMouseLeave.bind(this);
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
    $(this.table).find('td').off('mouseenter mouseleave');
  }

  handleColumnMouseEnter() {

  }

  handleColumnMouseLeave() {

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
      const topAtOrAboveStickyPoint =
        tableTopOffset < this.props.stickAt;
      const bottomAtOrAboveStickyPoint =
        tableBottomOffset - this.state.headerHeight < this.props.stickAt;
      let isVisible = false;
      if (topAtOrAboveStickyPoint && !bottomAtOrAboveStickyPoint) {
        isVisible = true;
      }
      $(this.fixed)
        .css('height', `${this.props.stickAt + this.state.headerHeight}px`)
        .css('pointer-events', isVisible ? 'auto' : 'none')
        .css('opacity', isVisible ? 1 : 0);
    }
  }

  updateState(newState, callback) {
    // only update the state if it changed to save on updates
    // and prevent a render loop
    if (!_(this.state).pick(_.keys(newState)).isEqual(newState)) {
      this.setState(newState, callback);
    }
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
    const tableWidth = $(this.table).outerWidth();
    this.updateState({
      columnSizes: headerSizes,
      headerHeight: maxHeaderHeight,
      tableWidth,
    }, callback);
  }

  renderStickyHeader() {
    return this.renderHeader({ sticky: true });
  }

  renderHeader(opts = {}) {
    const headerComponents = _.map(this.props.headerData, (value) => {
      let colStyles = { width: value.width };
      const key = value.key;
      if (opts.sticky && this.state.columnSizes[key] && !value.width) {
        colStyles = { width: this.state.columnSizes[key].width };
      }
      const cellStyle = cx(style.cell, { [style.sortableColumn]: value.sortable });
      return (
        <th
          className={cellStyle}
          style={colStyles}
          key={key}
          ref={(c) => {
            if (!opts.sticky) {
              this.headerComponents[key] = c;
            }
          }}
          onClick={value.sortable && value.onClick}
        >
          { value.label }
          { value.sortable &&
            <div
              className={
                cx(style.sortableColumnHighlight,
                  { [style.sortableColumnHighlightSelected]: this.props.selectedColumnKey === key }
                )
              }
            />
          }
        </th>
      );
    });
    return (
      <thead>
        <tr
          className={cx(style.row, style.header)}
        >
          { headerComponents }
        </tr>
      </thead>
    );
  }

  renderItems() {
    let spanKey;
    let spannedHeaderKeys;

    const {
      clickable,
      empty,
      emptyText,
      headerData,
      highlightable,
      items,
      loading,
      spanMap,
    } = this.props;

    const totalColumns = headerData.length;

    if (loading) {
      return (
        <tbody className={style.tbody}>
          <tr className={style.row}>
            <td
              className={style.cell}
              colSpan={totalColumns}
            >
              <span className={style.loadingText}>
                Loading...
              </span>
            </td>
          </tr>
        </tbody>
      );
    }

    if (empty && emptyText) {
      return (
        <tbody className={style.tbody}>
          <tr className={style.row}>
            <td
              className={style.cell}
              colSpan={totalColumns}
            >
              <span className={style.emptyText}>
                {emptyText}
              </span>
            </td>
          </tr>
        </tbody>
      );
    }

    if (spanMap) {
      spanKey = _.keys(spanMap)[0];
      spannedHeaderKeys = spanMap[spanKey];
    }

    const headerKeys = _.map(headerData, 'key');
    const rowComponents = [];

    _.forEach(items, (itemValue, itemIndex) => {
      const spanCount = _.get(itemValue[spanKey], 'length');
      const columnComponents = [];
      const isDisabledRow = itemValue.disabled;

      _.forEach(headerKeys, (headerKey) => {
        const isInnerKey = _.includes(spannedHeaderKeys, headerKey);
        let cellValue;
        let rowsToSpan;

        if (!isInnerKey) {
          rowsToSpan = spanCount;
          cellValue = itemValue[headerKey];
        } else {
          cellValue = itemValue[spanKey][0][headerKey];
        }

        if (!cellValue) {
          cellValue = '-';
        }

        columnComponents.push(
          <td
            className={style.cell}
            key={headerKey}
            rowSpan={rowsToSpan}
          >
            {cellValue}
          </td>
        );
      });

      rowComponents.push(
        <tr
          key={itemIndex}
          className={cx({
            [style.row]: true,
            [style.rowDisabled]: isDisabledRow,
            [style.clickable]: clickable,
            [style.highlightable]: highlightable,
          })}
        >
          {columnComponents}
        </tr>
      );

      // Create the remaining partial rows if necessary
      if (spanCount) {
        for (let i = 1; i < spanCount; i++) {
          const partialRowColumns = [];
          _.forEach(spannedHeaderKeys, (key) => {
            partialRowColumns.push(
              <td
                key={key}
                className={style.cell}
              >
                {itemValue[spanKey][i][key]}
              </td>
            );
          });
          rowComponents.push(
            <tr
              key={`${itemIndex}.${i}`}
              className={cx({
                [style.row]: true,
                [style.rowDisabled]: isDisabledRow,
                [style.clickable]: clickable,
                [style.highlightable]: highlightable,
              })}
            >
              {partialRowColumns}
            </tr>
          );
        }
      }
    });

    return (
      <tbody className={style.tbody}>
        {rowComponents}
      </tbody>
    );
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={style.wrapper}
        {...getDataAttrs(this.props.data)}
      >
        { !_.isNull(this.props.stickAt) &&
          <div
            ref={(c) => (this.fixed = c)}
            className={cx(style.table, style.sticky)}
            style={{
              backgroundColor: this.state.backgroundColor,
              width: this.state.tableWidth,
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
          ref={(c) => { this.table = c; }}
          className={style.table}
        >
          { this.renderHeader() }
          { this.renderItems() }
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  clickable: PropTypes.bool,
  empty: PropTypes.bool,
  emptyText: PropTypes.string,
  headerData: PropTypes.array,
  highlightable: PropTypes.bool,
  items: PropTypes.array,
  loading: PropTypes.bool,
  selectedColumnKey: PropTypes.string,
  spanMap: PropTypes.object,
  stickAt: PropTypes.number,
  style: PropTypes.object,
  data: PropTypes.object,
};

Table.defaultProps = {
  empty: false,
  emptyText: '',
  loading: false,
  stickAt: null,
};

Table.displayName = 'Table';

export default Table;
