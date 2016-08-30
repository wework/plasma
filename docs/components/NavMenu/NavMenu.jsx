import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

import style from './style.scss';

export default class NavMenu extends React.Component {
  render() {
    const partGroups = _.groupBy(this.props.data, (compData) => compData.part.toLowerCase());
    const parts = _.keys(partGroups);
    return (
      <div className={ style.wrapper }>
        <div className={ style.headWrapper }>
          <div className={ style.head }>Plasma</div>
        </div>
        { _.map(parts, (part) => {
          return (
            <div className={style.group}>
              <div className={style.groupTitle}>{_.capitalize(part)}</div>
              <ol>
                { _.map(partGroups[part], (cd) => {
                  console.log(cd);
                  return (
                    <li className={style.link}>
                      <Link to={`/plasma/docs/#${cd.displayName}`}>
                        { cd.displayName }
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          ); })
        }
      </div>
    );
  }
}
