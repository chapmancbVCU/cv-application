/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { Component } from 'react';

/**
 * @class Class responsible for rendering the main section of the webpage 
 * which contains the form and sample output.
 * @author Chad Chapman
 * @extends Component
 */
class Main extends Component {
    /**
     * Render function for the main component of this webpage.
     * @returns HTMLDivElement containing the main section of the webpage.
     */
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