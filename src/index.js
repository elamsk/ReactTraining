import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LifeCycle from './lifecycle.component';
import { Posts } from './post.component';
import PostDetails from './PostDetails.Component';
import { Stocks } from './Stocks.component';

var MyRoutes = 
<React.Fragment>
<BrowserRouter>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <div className="navbar-brand" >Online Course</div>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/posts">Posts</Link></li>
    </ul>
  </div>
</nav>
<Route path="/" exact component={App}></Route>
<Route path="/posts" component={Posts}></Route>
<Route path="/postDetails/:id" component={PostDetails}></Route>
<Route path="/Stocks" component={Stocks}></Route>
</BrowserRouter>
</React.Fragment>

ReactDOM.render(MyRoutes, document.getElementById('root'));

//  ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<LifeCycle />, document.getElementById('root'));
//ReactDOM.render(<Posts />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
