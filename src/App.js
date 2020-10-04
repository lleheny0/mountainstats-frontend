import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Resort from './views/resort';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Route path="/resorts/:resortId" component={Resort} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
