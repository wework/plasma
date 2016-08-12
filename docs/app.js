import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { anchorate } from 'anchorate';

import Root from './Root';
import Components from './containers/Components';
import Playground from './containers/Playground';
import Playground2 from './containers/Playground2';
import Playground3 from './containers/Playground3';

function onUpdate () {
  anchorate()
}

render((
  <Router 
    history={browserHistory}
    onUpdate={onUpdate}
  >
    <Route path="/plasma" component={Root}>
      <Route path="components" component={Components} />
      <Route path="playground" component={Playground} />
      <Route path="playground2" component={Playground2} />
      <Route path="playground3" component={Playground3} />
    </Route>
  </Router>
), document.getElementById('app'));

// <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>