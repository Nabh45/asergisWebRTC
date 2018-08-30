import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebButtonPage from './components/webButtonPage';
import logo from './logo.svg';
import './App.css';

export default () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={WebButtonPage} />
    </Switch>
  </BrowserRouter>

)
