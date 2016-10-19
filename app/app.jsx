import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory, hashHistory } from 'react-router';
import Bootstrap from 'react-bootstrap'
import './../assets/style.css';
requre('src/assets/video.css');
import Main from 'Main';
import Admin from 'Admin';
import Edit from 'Edit';

ReactDOM.render(

  <Router history={ hashHistory }>

    <Route path="/" component={Main}>
      <Route path="/edit" component={Edit} />
      <IndexRoute component={Admin} />
    </Route>





  </Router>,
  document.getElementById('app')

);
