/**
 * @file CV.tsx file is responsible for handling props and rendering of the CV 
 * application.
 * @author Chad Chapman
 */

/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faMobileScreen } 
    from "@fortawesome/free-solid-svg-icons";
import React, { FC } from 'react';

// Make FontAwesome Icon available to use.
library.add(faEnvelope);
library.add(faLinkedinIn);
library.add(faLocationDot);
library.add(faMobileScreen);
/**
 * @interface CVProps The interface that describes variables associated with 
 * props of the CV component.
 */
interface CVProps {
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    linkedInLink: string;
    phone: string;
    profile: string;
    title: string;
}

/**
 * Renders the CV Application component of this website.
 * @param param0 
 * @returns HTMLDivElement that contains CV Application.
 */
const CV : FC<CVProps> = ({
        address, 
        email,
        firstName, 
        lastName, 
        linkedInLink,
        phone,
        profile, 
        title
    }) => {
    return(
        <div className="cv-container">
            <div className="cv-header">
                <img className="cv-photo" alt="Profile"></img>
                <div className="name-title">
                    <div className="cv-header-text cv-name">{firstName}</div>
                    <div className="cv-header-text cv-name"> {lastName}</div>
                    <div className="cv-header-text">{title}</div>
                </div>
            </div>

            <div className="cv-details">
                <div className="section-label details-label">Details</div>
                <div className="cv-details-row">
                    <FontAwesomeIcon icon={faLocationDot} className="icon"/>
                    <div>{address}</div>
                </div>
                <div className="cv-details-row">
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
                    <div>{linkedInLink}</div>
                </div>
                <div className="cv-details-row">
                    <FontAwesomeIcon icon={faMobileScreen} className="icon"/>
                    <div>{phone}</div>
                </div>
                <div className="cv-details-row">
                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    <div>{email}</div>
                </div>
            </div>

            <div className="cv-profile">
            <div className="section-label profile-label">Profile</div>
                <div className="profile">{profile}</div>
            </div>
        </div>
    );
}

export default CV;