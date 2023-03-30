/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

function Main() {
    const [details, setDetails] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");

    function handleDetailsInput(event: any) {
        setDetails(event.target.value);
    }

    function handleFirstNameInput(event: any) {
        setFirstName(event.target.value);
    }

    function handleLastNameInput(event: any) {
        setLastName(event.target.value);
    }

    function handleTitleInput(event: any) {
        setTitle(event.target.value);
    }

    return(
        <div className="main">
            <Form details={details}
                firstName={firstName} 
                handleDetailsInput={handleDetailsInput}
                handleFirstNameInput={handleFirstNameInput}
                handleLastNameInput={handleLastNameInput}
                handleTitleInput={handleTitleInput}
                lastName={lastName} 
                title={title} 
            />
            <CV details={details}
                firstName={firstName} 
                lastName={lastName}
                title={title}
            />
        </div>
    );
    
}

export default Main;