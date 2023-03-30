/**
 * @file Man.tsx file is responsible for hooks that handles props for the 
 * form and CV application components.  It is also the parent of those 
 * components.
 * @author Chad Chapman
 */

/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import CV from './CV';
import Form from './Form';
import React, { useState } from 'react';

/**
 * Renders and manages hooks for the Form and CV Application child components.
 * @returns HTMLDivElement that contains the Form and CV Application 
 * components.
 */
function Main() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profile, setProfile] = useState("");
    const [title, setTitle] = useState("");

    /**
     * Event handler that updates value of firstName when input is detected.
     * @param event The event provided by onChange.
     * @memberof Main
     */
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