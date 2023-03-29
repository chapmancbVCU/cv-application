/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

function Main() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    function handleFirstNameInput(event: any) {
        setFirstName(event.target.value);
    }

    function handleLastNameInput(event: any) {
        setLastName(event.target.value);
    }

    return(
        <div className="main">
            <Form firstName={firstName} handleFirstNameInput={handleFirstNameInput}
                lastName={lastName} handleLastNameInput={handleLastNameInput}/>
            <CV firstName={firstName} lastName={lastName}/>
        </div>
    );
    
}

export default Main;