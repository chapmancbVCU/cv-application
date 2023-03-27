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
 * @extends Component
 */
class App extends Component {
    /**
     * Rendering of all website components start here.
     * @returns HTMLDivElement containing body content.
     */
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
