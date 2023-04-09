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
    beginEmployment: string;
    email: string;
    employer: string;
    employerLocation: string;
    employmentBulletPoints: string[];
    endEmployment: string
    firstName: string;
    handleAddressInput: any;
    handleBeginEmploymentDateInput: any;
    handleBulletPointAdd: any;
    handleBulletPointInput: any;
    handleBulletPointRemove: any;
    handleEmailInput: any;
    handleEmployerInput: any;
    handleEmployerLocationInput: any;
    handleEndEmploymentDateInput: any;
    handleFirstNameInput: any;
    handleLastNameInput: any;
    handleLinkedInLink: any;
    handlePhoneNumberInput: any;
    handleProfileInput: any;
    handlePositionInput: any;
    handleTitleInput: any;
    lastName: string;
    linkedInLink: string;
    phone: string;
    phoneNumberFormatter: any;
    profile: string;
    position: string;
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
        beginEmployment,
        email,
        employer,
        employerLocation,
        employmentBulletPoints,
        endEmployment,
        firstName,
        handleAddressInput,
        handleBeginEmploymentDateInput,
        handleBulletPointAdd,
        handleBulletPointInput,
        handleBulletPointRemove,
        handleEmailInput,
        handleEmployerInput,
        handleEmployerLocationInput,
        handleEndEmploymentDateInput,
        handleFirstNameInput,
        handleLastNameInput,
        handleLinkedInLink,
        handlePhoneNumberInput,
        handleProfileInput,
        handlePositionInput,
        handleTitleInput,
        lastName,
        linkedInLink,
        phoneNumberFormatter,
        phone,
        position,
        profile,
        title,
        uploadFile
    }) => { 

    
    //alert(employmentBulletPoints[0].bulletPoint)
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
                        maxLength={500}
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
                        onChange={(event) => handlePositionInput(event)}
                        value={position}/>
                </div>
                <div className="form-row">
                    <label htmlFor="employer">Employer</label>
                    <input id="employer"
                        name="employer"
                        type="text"
                        placeholder="ACME"
                        minLength={5}
                        maxLength={25}
                        required
                        onChange={(event) => handleEmployerInput(event)}
                        value={employer}/>
                </div>
                <div className="form-row">
                    <label htmlFor="employer-location">Employer Location</label>
                    <input id="employer-location"
                        name="employer-location"
                        type="text"
                        placeholder="Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch, Wales"
                        minLength={5}
                        maxLength={80}
                        required
                        onChange={(event) => handleEmployerLocationInput(event)}
                        value={employerLocation}/>
                </div>
                <div className="form-row">
                    <label htmlFor="begin-employment">Begin Employment</label>
                    <input id="begin-employment"
                        name="begin-employment"
                        type="text"
                        placeholder="September, 2020"
                        minLength={5}
                        maxLength={20}
                        required
                        onChange={(event) => 
                            handleBeginEmploymentDateInput(event)}
                        value={beginEmployment}/>
                </div>
                <div className="form-row">
                    <label htmlFor="end-employment">End Employment</label>
                    <input id="end-employment"
                        name="end-mployment"
                        type="text"
                        placeholder="December, 2022"
                        minLength={5}
                        maxLength={20}
                        required
                        onChange={(event) => 
                            handleEndEmploymentDateInput(event)}
                        value={endEmployment}/>
                </div>
                <h4>
                    <label htmlFor="bulletpoint">Employment Highlights</label>
                </h4>
                
                {employmentBulletPoints.map((bullet: any, index) => (
                    <div key = {index} className="form-bullet-point">
                        <div className="first-division">
                            <input id="bulletpoint"
                                name="bulletpoint"
                                type="text"
                                minLength={5}
                                required
                                value={bullet.bulletpoint}
                                onChange={(event) => 
                                    handleBulletPointInput(event, index)}
                            />
                            {employmentBulletPoints.length -1 === index && 
                                employmentBulletPoints.length < 4 && 
                                <button type="button" className="add-button"
                                    onClick={() => handleBulletPointAdd()}>
                                    <span>Add</span>
                                </button>
                            }
                            
                        </div>
                        <div className="second-divison">
                            {employmentBulletPoints.length > 1 && (
                                <button type="button" className="remove-button"
                                    onClick={() => 
                                        handleBulletPointRemove(index)}>
                                    <span>Remove</span>
                                </button>
                            )} 
                        </div>
                    </div>
                ))}
            </form>
        </div>
    );   
}

export default Form;