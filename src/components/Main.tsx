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
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [linkedInLink, setLinkedInLink] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [profile, setProfile] = useState("");
    const [title, setTitle] = useState("");

    /**
     * Function that receives number as an input and formats it based on the 
     * length.  For strings less than three it does nothing. For values less 
     * than 7 you get a formatted string that looks like xxx-xxx.  If the 
     * input string is more than 7 then the formatted string looks like 
     * xxx-xxx-xx.  Client side validation is recommened as well.  
     * 
     * Do not call this function directly within the html file.  The 
     * phoneNumberFormatter function will be used to call this function in 
     * order to set the correct format.
     * @param {string} value the string of numbers
     * @returns The properly formatted string based on length.
     */
    function formatPhoneNumber(value: string): string {
        /* If input is falsy eg if the user deletes the input, then just 
           return. */
        if(!value) return value;
    
        // Clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');
    
        /* phoneNumberLength is used to know when to apply or formatting for 
           the phone number. */
        const phoneNumberLength = phoneNumber.length;
    
        /* We need to return the value with no formatting if its less than four
           digits.  This is to avoid weird behavior that occurs if you format
           the area code too early. */
        if(phoneNumberLength < 4) {
            return phoneNumber;
        }
    
        /* If phoneNumberLength is greater than 4 and less than 7 we start to
           return the formatted number. */
        if(phoneNumberLength < 7) {
            return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
        }
    
        /* Finally, if the phoneNumberLength is greater than seven, we add the 
           last bit of formatting and return it. */
        return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(
            3,
            6,
        )}-${phoneNumber.slice(6,9)}`;
    }

    /**
     * Event handler that updates value of address when input is detected.
     * @param event The event provided by onChange.
     */
    function handleAddressInput(event: any) {
        setAddress(event.target.value);
    }

    /**
     * Event handler that updates value of E-mail address when input is 
     * detected.
     * @param event The event provided by onChange.
     */
    function handleEmailInput(event: any) {
        setEmail(event.target.value);
    }

    /**
     * Event handler that updates value of firstName when input is detected.
     * @param event The event provided by onChange.
     */
    function handleFirstNameInput(event: any) {
        setFirstName(event.target.value);
    }

    /**
     * Event handler that updates value of lastName when input is detected.
     * @param event The event provided by onChange.
     */
    function handleLastNameInput(event: any) {
        setLastName(event.target.value);
    }

    /**
     * Event handler that updates value for Linked In URL when input is 
     * detected.
     * @param event The event provided by onChange.
     */
    function handleLinkedInLink(event: any) {
        setLinkedInLink(event.target.value);
    }

    /**
     * Event handler that updates value of phone number when input is detected.
     * @param event The event provided by onChange.
     */
    function handlePhoneNumberInput(event: any) {
        setPhoneNumber(event.target.value);
    }

    /**
     * Event handler that updates value of profile details when input is 
     * detected.
     * @param event The event provided by onChange.
     */
    function handleProfileInput(event: any) {
        setProfile(event.target.value);
    }

    /**
     * Event handler that updates value of CV title when input is detected.
     * @param event The event provided by onChange.
     */
    function handleTitleInput(event: any) {
        setTitle(event.target.value);
    }

    /**
     * Uses an event object to get phone number input from webpage.  
     * The way this function works is we grab the value of what the user is 
     * typing into the input.  Next we format the value and set the value of 
     * the input field in the html document.
     * @param event The event when a key is pressed down.
     */
    function phoneNumberFormatter(event: any) {
        const formattedInputValue = formatPhoneNumber(event.target.value);
        event.target.value = formattedInputValue;
    }

    return(
        <div className="main">
            <Form
                address={address} 
                email={email}
                firstName={firstName}
                handleAddressInput={handleAddressInput}
                handleFirstNameInput={handleFirstNameInput}
                handleEmailInput={handleEmailInput}
                handleLastNameInput={handleLastNameInput}
                handleLinkedInLink={handleLinkedInLink}
                handlePhoneNumberInput={handlePhoneNumberInput}
                handleProfileInput={handleProfileInput}
                handleTitleInput={handleTitleInput}
                lastName={lastName} 
                linkedInLink={linkedInLink}
                phone={phone}
                phoneNumberFormatter={phoneNumberFormatter}
                profile={profile}
                title={title} 
            />
            <CV address={address}
                email={email}
                firstName={firstName} 
                lastName={lastName}
                linkedInLink={linkedInLink}
                phone={phone}
                profile={profile}
                title={title}
            />
        </div>
    );
    
}

export default Main;