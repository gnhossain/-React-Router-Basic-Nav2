import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";
const App = () => (
  <div>
    <div>
    <Navigation />
    </div>
    <div>
    {/* Adding Route to the path */}
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
    </div>
  </div>
);

export default App;
