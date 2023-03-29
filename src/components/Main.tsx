/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

function Main() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");

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
            <Form firstName={firstName} 
                handleFirstNameInput={handleFirstNameInput}
                handleLastNameInput={handleLastNameInput}
                handleTitleInput={handleTitleInput}
                lastName={lastName} 
                title={title} 
            />
            <CV firstName={firstName} 
                lastName={lastName}
                title={title}
            />
        </div>
    );
    
}

export default Main;