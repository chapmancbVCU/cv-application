/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import './App.css';
import Header from './components/Header';
import React, { Component } from 'react';



class App extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
          <Header />
        );
    }
}

export default App;
