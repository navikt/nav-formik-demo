// Helper styles for demo
import './helper.css';
import { MoreResources } from './components/helper';
/*
import { BasicForm } from './components/basic';
import {SyncValidationForm} from "./components/sync-validation";
import {CustomInputForm} from "./components/custom-inputs";
*/
import {BasicForm, SyncValidationForm, CustomInputForm, ReactSelect} from './components';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={BasicForm}/>
          <Route path="/sync" component={SyncValidationForm}/>
          <Route path="/custom" component={CustomInputForm} />
          <Route path="/select" component={ReactSelect} />
        </Switch>
        <MoreResources />
      </div>
    );
  }
}

export default App;
