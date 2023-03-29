/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC } from 'react';

interface ApplicationProps {
    firstName: string;
    handleFirstNameInput: any;
    handleLastNameInput: any;
    handleTitleInput: any;
    lastName: string;
    title: string;
}

const Form : FC<ApplicationProps> = ({
    firstName, 
    handleFirstNameInput,
    handleLastNameInput,
    handleTitleInput,
    lastName,
    title,}) => { 
        
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
                <div className="form-row">
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        name="title" 
                        type="text"
                        minLength={5}
                        maxLength={25}
                        required
                        onChange={(event) => handleTitleInput(event)}
                        value={title}/>
                </div>
            </form>
        </div>
    );
    
}

export default Form;