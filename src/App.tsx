import React from 'react';
import {Switch, Route} from "react-router-dom";


// styles
import './App.css';

// context
import { StoreProvider } from './store/Store';

// pages
import HomePage from './pages/HomePage/HomePage';
import Dashboard from "./pages/Dashboard/Dashboard";



function App() {
  return (
    <StoreProvider>
      <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </div>
    </StoreProvider>
    
  );
}

export default App;
