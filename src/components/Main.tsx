/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Form />
                <CV />
            </div>
        );
    }
}

export default Main;