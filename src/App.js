import React from 'react';
import { Route } from 'react-router-dom';

import { TableState } from './utils/TableContext/TableState';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import About from './pages/About';

import './index.scss';

export default function App() {
  return (
    <div className="App">
      <TableState>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Footer />
      </TableState>
    </div>
  );
}
