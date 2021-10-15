import React from 'react';
import home from './compontents/home';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div class="">
          <Route exact path= {["/","/JSW-React"]} component={home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
