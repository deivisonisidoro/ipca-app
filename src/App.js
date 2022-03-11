import React from 'react';
import Routes from "./routes";
import {BrowserRouter as Router} from 'react-router-dom';
import Hearder from './components/Header';


export default function App() {

  return (
    <Router>
      <Hearder/>
      <Routes />
    </Router>
  );
}