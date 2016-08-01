import _ from 'lodash-compat';
import React from 'react';
import style from './style.scss';
import cx from 'classnames';

class Table extends React.Component {

  renderHeader() {
    const headerComponents = _.map(this.props.header, (value, key) => {
      return (
        <th className={ style.cell } key={ key }>{ value }</th>
      );
    });
    return (<thead><tr className={ cx(style.row, style.header) }>{ headerComponents }</tr></thead>);
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
    return <tbody>{ itemComponents }</tbody>;
  }

  render() {
    return (
      <table className={ style.table }>
        { this.renderHeader() }
        { this.renderItems() }
      </table>
    );
  }
}

Table.defaultProps = {};

Table.displayName = 'Organism.Table';

export default Table;
