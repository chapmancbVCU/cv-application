/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC } from 'react';

interface ApplicationProps {
    firstName: string;
    handleFirstNameInput: any;
    lastName: string;
    handleLastNameInput: any;
}

const Form : FC<ApplicationProps> = ({
    firstName, handleFirstNameInput,
    lastName, handleLastNameInput}) => { 
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
                        minLength={5}
                        maxLength={25}
                        required
                        onChange={(event) => handleFirstNameInput(event)}
                        value={firstName}/>
                </div>
                <div className="form-row">
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        id="last-name" 
                        name="last-name" 
                        type="text"
                        minLength={5}
                        maxLength={25}
                        required
                        onChange={(event) => handleLastNameInput(event)}
                        value={lastName}/>
                </div>
            </form>
        </div>
    );
    
}

export default Form;