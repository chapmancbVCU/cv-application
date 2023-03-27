/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { Component } from 'react';

/**
 * @class Class responsible for rendering form.
 * @author Chad Chapman
 * @extends Component
 */
class Form extends Component<{}, { firstName: string }> {
    constructor(props: any){
        super(props);

        this.state = {
            firstName: ''
        }
    }

    /**
     * Render function for the form component of this webpage.
     * @returns HTMLDivElement containing the form.
     */
    render() {
        return(
            <div className="form-container">
                <h2>Personal Information</h2>
                <hr></hr>
                <form className="cv-form">
                    <div className="form-row">
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            id="first-name" 
                            name="first-name" 
                            type="text"
                            placeholder="Joe"
                            onChange={event => this.setState({firstName: event.target.value})}
                            value={this.state.firstName}/>
                    </div>
                    {this.state.firstName}
                    <div className="form-row">
                        <label htmlFor="last-name">Last Name</label>
                        <input id="last-name" name="last-name" type="text" />
                    </div>

                </form>
            </div>
        );
    }
}

export default Form;