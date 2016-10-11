import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { anchorate } from 'anchorate';

import Root from './Root';
import Components from './containers/docs.jsx';
import Playground from './containers/Playground.jsx';
import Playground2 from './containers/Playground2.jsx';
import Playground3 from './containers/Playground3.jsx';
import Playground4 from './containers/Playground4.jsx';
import Playground5 from './containers/Playground5.jsx';

function onUpdate() {
  anchorate();
}

render((
  <Router
    history={browserHistory}
    onUpdate={onUpdate}
  >
    <Route path="/plasma" component={Root}>
      <Route path="docs" component={Components} />
      <Route path="playground" component={Playground} />
      <Route path="playground2" component={Playground2} />
      <Route path="playground3" component={Playground3} />
      <Route path="playground4" component={Playground4} />
      <Route path="playground5" component={Playground5} />
    </Route>
  </Router>
), document.getElementById('app'));
