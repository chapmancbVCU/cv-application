/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

function Main() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profile, setProfile] = useState("");
    const [title, setTitle] = useState("");

    function handleFirstNameInput(event: any) {
        setFirstName(event.target.value);
    }

    function handleLastNameInput(event: any) {
        setLastName(event.target.value);
    }

    function handleProfileInput(event: any) {
        setProfile(event.target.value);
    }

    function handleTitleInput(event: any) {
        setTitle(event.target.value);
    }

    return(
        <div className="main">
            <Form 
                firstName={firstName} 
                handleFirstNameInput={handleFirstNameInput}
                handleLastNameInput={handleLastNameInput}
                handleProfileInput={handleProfileInput}
                handleTitleInput={handleTitleInput}
                lastName={lastName} 
                profile={profile}
                title={title} 
            />
            <CV firstName={firstName} 
                lastName={lastName}
                profile={profile}
                title={title}
            />
        </div>
    );
    
}

export default Main;