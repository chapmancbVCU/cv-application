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
import { faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from 'react';

library.add(faLocationDot);


/**
 * @interface CVProps The interface that describes variables associated with 
 * props of the CV component.
 */
interface CVProps {
    firstName: string;
    lastName: string;
    profile: string;
    title: string;
}

/**
 * Renders the CV Application component of this website.
 * @param param0 
 * @returns HTMLDivElement that contains CV Application.
 */
const CV : FC<CVProps> = ({firstName, lastName, profile, title}) => {
    return(
        <div className="cv-container">
            <div className="cv-header">
                <img className="cv-photo"></img>
                <div className="name-title">
                    <div className="cv-header-text cv-name">{firstName}</div>
                    <div className="cv-header-text cv-name"> {lastName}</div>
                    <div className="cv-header-text">{title}</div>
                </div>
            </div>

            <div className="cv-details">
                <div className="section-label details-label">Details</div>
                <div className="address">
                    <FontAwesomeIcon icon={faLocationDot} />
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