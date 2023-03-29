/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

function Main() {
    const [firstName, setFirstName] = useState("")

    function handleFirstNameInput(event: any) {
        setFirstName(event.target.value);
    }

    return(
        <div className="main">
            <Form firstName={firstName} handleFirstNameInput={handleFirstNameInput}/>
            <CV firstName={firstName}/>
        </div>
    );
    
}

export default Main;