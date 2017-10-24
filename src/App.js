import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Add from './components/Add'
import Layout from './components/Layout'
import Home from './components/Home'
import Board from './components/Board'

import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
         <Layout>
           <Route path='/' exact component={Home}/>
           <Route path='/board' component={Board}/>
           <Route path='/Add' component={Add}/>
          </Layout>
       </BrowserRouter>

    )
  }
}

export default App;
