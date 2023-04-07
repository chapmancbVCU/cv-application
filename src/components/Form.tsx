/**
 * @file Form.tsx file is responsible for handling props and rendering of the 
 * form component of the CV application.
 * @author Chad Chapman
 */

/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC } from 'react';

/**
 * @interface ApplicationProps The interface that describes variables 
 * associated with props of the Form component.
 */
interface ApplicationProps {
    address: string;
    email: string;
    firstName: string;
    handleAddressInput: any;
    handleEmailInput: any;
    handleFirstNameInput: any;
    handleLastNameInput: any;
    handleLinkedInLink: any;
    handlePhoneNumberInput: any;
    handleProfileInput: any;
    handleTitleInput: any;
    lastName: string;
    linkedInLink: string;
    phone: string;
    phoneNumberFormatter: any;
    profile: string;
    position: string;
    positionInput: any;
    title: string;
    uploadFile: any;
}

/**
 * Renders the form  component of this website.
 * @param param0 
 * @returns HTMLDivElement that contains CV form.
 */
const Form : FC<ApplicationProps> = ({
        address,
        email,
        firstName,
        handleAddressInput,
        handleEmailInput,
        handleFirstNameInput,
        handleLastNameInput,
        handleLinkedInLink,
        handlePhoneNumberInput,
        handleProfileInput, 
        handleTitleInput,
        lastName,
        linkedInLink,
        phoneNumberFormatter,
        phone,
        position,
        positionInput,
        profile,
        title,
        uploadFile
    }) => { 
        
    return(
        <div className="form-container">
            <h2>Personal Information</h2>
            <hr></hr>
            <form className="cv-form">
                <div className="form-row">
                    <label htmlFor="first-name">First Name</label>
                    <input id="first-name" 
                        name="first-name" 
                        type="text"
                        minLength={5}
                        maxLength={25}
                        placeholder="John"
                        required
                        onChange={(event) => handleFirstNameInput(event)}
                        value={firstName}/>
                </div>
                <div className="form-row">
                    <label htmlFor="last-name">Last Name</label>
                    <input id="last-name" 
                        name="last-name" 
                        type="text"
                        minLength={5}
                        maxLength={25}
                        placeholder="Doe"
                        required
                        onChange={(event) => handleLastNameInput(event)}
                        value={lastName}/>
                </div>
                <div className="form-row">
                    <label htmlFor="title">Title</label>
                    <input id="title" 
                        name="title" 
                        type="text"
                        minLength={5}
                        maxLength={25}
                        placeholder="Accountant"
                        required
                        onChange={(event) => handleTitleInput(event)}
                        value={title}/>
                </div>
                <div className="form-row">
                    <label htmlFor="address">Address</label>
                    <input id="address" 
                        name="address" 
                        type="text"
                        minLength={5}
                        maxLength={75}
                        placeholder="123 Main Street, Westchestertonfieldville, Iowa 12345"
                        required
                        onChange={(event) => handleAddressInput(event)}
                        value={address}/>
                </div>
                <div className="form-row">
                    <label htmlFor="linked-in">LinkedIn</label>
                    <input id="linked-in" 
                        name="linked-in" 
                        type="url"
                        minLength={5}
                        required
                        onChange={(event) => handleLinkedInLink(event)}
                        value={linkedInLink}/>
                </div>
                <div className="form-row">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" 
                        name="phone" 
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        minLength={12}
                        maxLength={12}
                        placeholder="ex: 123-456-7890"
                        required
                        onChange={(event) => handlePhoneNumberInput(event)}
                        onKeyDown={(event) => phoneNumberFormatter(event)}
                        value={phone}/>
                </div>
                <div className="form-row">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" 
                        name="email" 
                        type="email"
                        placeholder="joe@example.com"
                        required
                        onChange={(event) => handleEmailInput(event)}
                        value={email}/>
                </div>
                <div className="form-row">
                    <label htmlFor="profile">Details</label>
                    <textarea id="profile" 
                        name="profile"
                        minLength={5}
                        maxLength={300}
                        placeholder="Describe yourself in paragraph form..."
                        required
                        onChange={(event) => handleProfileInput(event)}
                        value={profile}>
                    </textarea>
                </div>
                <div className="form-row">
                    <label htmlFor="profile-image">Upload Profile Image</label>
                    <input id="profile-image"
                        name="profile-image"
                        type="file"
                        onChange={(event) => uploadFile(event)}/>
                </div>
                <h3>Experience</h3>
                <div className="form-row">
                    <label htmlFor="position">Position</label>
                    <input id="position"
                        name="position"
                        type="text"
                        placeholder="Accountant"
                        minLength={5}
                        maxLength={25}
                        required
                        onChange={(event) => positionInput(event)}
                        value={position}/>
                </div>
            </form>
        </div>
    );   
}

export default Form;