import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';

import Root from './Root';
import Components from './containers/Components';
import FilterableTable from './containers/FilterableTable';

render((
  <Router history={browserHistory}>
    <Route path="/plasma" component={Root}>
      <Route path="components" component={Components} />
      <Route path="templates" component={FilterableTable} />
    </Route>
  </Router>
), document.getElementById('app'));

// <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>