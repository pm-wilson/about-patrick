import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/projects"
            exact
            component={Projects}
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/contact"
            exact
            component={Contact}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
