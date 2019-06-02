import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './views/Home';
import { Grid } from './views/Grid';
import { Forms } from './views/Forms';
import './App.scss';

function App() {
  return (
    <Router>
    <div id="app">
      <Nav/>
      <main id="page-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/grid" component={Grid} />
        <Route exact path="/forms" component={Forms} />
      </main>
    </div>
    </Router>
  );
}

export default App;
