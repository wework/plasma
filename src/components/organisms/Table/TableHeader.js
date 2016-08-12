import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";
import $ from "jquery";
import cx from 'classnames';

import style from './style.scss';

class TableHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      showFloatHeader: false,
      headerOffset: {
        top: 0,
        left: 0
      },
      columnWidths: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  buildHeaderCells() {
    let item = this.props.item,
        columnKeys = Object.keys(item),
        columns = [];

    return _.flatten(columnKeys.map((key, index) => {
      let isLast = index === columnKeys.length - 1;

      if (key === this.props.collectionKey) {
        let collectionItem = item[this.props.collectionKey],
            collectionKeys = Object.keys(collectionItem);

        return collectionKeys.map((collectionKey, collectionIndex) => {
          let isLastAndLastInCollection = isLast && collectionIndex === collectionKeys.length - 1;
          return this.buildHeaderCell(collectionItem[collectionKey], isLastAndLastInCollection);
        });
      } else {
        return this.buildHeaderCell(item[key], isLast);
      }
    }));
  }

  buildHeaderCell(name, isLast) {
    
    const cellStyle = cx( style.headerCell, {
      [style.headerCellLast]: isLast
    });

    return (
      <th className={ cellStyle }>{ name }</th>
    )
  }

  componentDidMount() {
    this.updateFloatHeaderState();
    // register for window scroll events
    $(window).on('scroll', this.handleWindowScroll);
  }

  componentDidUpdate() {
    this.updateFloatHeaderState();
  }

  componentWillUnmount() {
    // unregister the scroll event!
    $(window).off('scroll', this.handleWindowScroll);
  }

  updateFloatHeaderState() {
    let header = $(ReactDOM.findDOMNode(this));
    let table = header.parent('table');
    this.tableContainer = table.offsetParent();

    let scrollTop = this.tableContainer.scrollTop();
    let scrollLeft = this.tableContainer.scrollLeft();
    this.tableTop = table.position().top + scrollTop;
    this.tableLeft = table.offset().left + scrollLeft;

    this.updateState({
      headerOffsetTop: this.tableContainer.offset().top,
      headerOffsetLeft: this.tableLeft - scrollLeft,
      columnWidths: header.find('tr:first th').map( (i, e) => { return $(e).outerWidth(); } ).toArray()
    });
  }

  handleWindowScroll(ev) {
    console.log('scroll');
    let scrollTop = $(window).scrollTop();
    let scrollLeft = $(window).scrollLeft();
    this.updateState({
      showFloatHeader: scrollTop >= this.tableTop,
      headerOffsetLeft: this.tableLeft - scrollLeft
    });
  }

  updateState(newState) {
    // only update the state if it changed to save on updates
    // and prevent a render loop
    if ( !_(this.state).pick(_.keys(newState)).isEqual(newState) ) {
      this.setState(newState);
      console.log(this.state);
    }
  }

  render(){
    let floatHeaderStyle = _.extend({}, style.floatHeader, {
      visibility: this.state.showFloatHeader ? 'visible' : 'hidden',
      top: this.state.headerOffsetTop,
      left: this.state.headerOffsetLeft
    });

    let colGroups = this.state.columnWidths.map( width => {
      return <col style={{width: width}} ></col>;
    });

    return (
      <thead style={style.base}>
        <tr>
          {this.buildHeaderCells()}
        </tr>
        <tr style={floatHeaderStyle}>
          <th>
            <table style={this.props.tableStyle}>
              <colgroup>{colGroups}</colgroup>
              <thead style={style.base}><tr>{this.buildHeaderCells()}</tr></thead>
            </table>
          </th>
        </tr>
      </thead>
    );
  }

}

TableHeader.displayName = 'Organism.TableHeader';

export default TableHeader;
