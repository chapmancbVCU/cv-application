/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC } from 'react';

/**
 * @class Class responsible for rendering form.
 * @author Chad Chapman
 * @extends Component
 */

interface ApplicationProps {
    firstName: string
    handleFirstNameInput: any;
}
const CVForm : FC<ApplicationProps> = ({firstName, handleFirstNameInput}) => {

    
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
                        onChange={(event) => handleFirstNameInput(event)}
                        /*onChange={event => setState(
                            {firstName: event.target.value})}*/
                        value={firstName}/>
                </div>
                {firstName}
                

            </form>
        </div>
    );
    
}

export default CVForm;