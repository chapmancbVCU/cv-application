/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC } from 'react';

interface ApplicationProps {
    firstName: string
    handleFirstNameInput: any;
}

const Form : FC<ApplicationProps> = ({firstName, handleFirstNameInput}) => { 
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
                        value={firstName}/>
                </div>
            </form>
        </div>
    );
    
}

export default Form;