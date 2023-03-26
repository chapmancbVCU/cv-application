/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { Component } from 'react';

/**
 * @class This class is responsble for rendering the header component of the 
 * webpage.
 * @author Chad Chapman
 * @extends Component
 */
class Header extends Component {
    /**
     * Render function for the header component of this webpage.
     * @returns HTMLDivElement containing the header.
     */
    render() {
        return(
            <div className="header">
                <h1>CV Application</h1>
            </div>
        )
    }
}

export default Header;