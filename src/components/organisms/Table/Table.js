import React from 'react';
import style from './style.scss';

class Table extends React.Component {
  render() {
    return (
      <table className={ style.wrapper }>
        <td>
          <tr>one</tr>
        </td>
      </table>
    );
  }
}

Table.defaultProps = {};

Table.displayName = 'Organism.Table';

export default Table;
