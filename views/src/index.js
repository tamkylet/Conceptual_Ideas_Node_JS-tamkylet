import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notfound from './notfound';
import NavigationBar from './javascripts/ui/navigation_bar.js';
import UserApplications from './javascripts/ui/user_applications.js'; 
import App from './javascripts/ui/app.js';
import App1 from './javascripts/ui/app1.js';
import CounterRedux from './javascripts/containers/counterRedux.js';

ReactDOM.render(<NavigationBar/>, document.getElementById('nav'));

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={UserApplications} />
        <Route path="/app" component={App} />
        <Route path="/app1" component={App1} />
        <Route
          path='/app3'
          render={(props) => <CounterRedux {...props} counterNum={10} />}
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
