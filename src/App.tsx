/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { Component } from 'react';

/**
 * @class Main entrypoint of page after index.js
 * @author Chad Chapman
 */
class App extends Component {
    render() {
        return(
          <div>
            <Header />
            <Main />
          </div>
        );
    }
}

export default App;
