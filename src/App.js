import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Resorts from './views/resorts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Route path="/resorts/:resortId" component={Resorts}></Route>
      </Route>
    </BrowserRouter>
  );
}

export default App;
