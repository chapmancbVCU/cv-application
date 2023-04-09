/**
 * @file CV.tsx file is responsible for handling props and rendering of the CV 
 * application.
 * @author Chad Chapman
 */

/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import AccountImage from "../images/account.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faMobileScreen } 
    from "@fortawesome/free-solid-svg-icons";
import React, { FC } from 'react';

// Make FontAwesome Icons available for use.
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
    beginEducation: string;
    beginEmployment: string;
    degree: string;
    email: string;
    employer: string;
    employerLocation: string;
    employmentBulletPoints: string[];
    endEducation: string;
    endEmployment: string;
    firstName: string;
    lastName: string;
    linkedInLink: string;
    phone: string;
    profile: string;
    profileImage: any;
    position: string;
    schoolLocation: string;
    schoolName: string;
    title: string;
}

/**
 * Displays default image when profile image has not yet been selected.
 * @param event When no image is selected.
 */
function addDefaultSrc(event: any) {
    event.target.src = AccountImage;
}

/**
 * Renders the CV Application component of this website.
 * @param param0 
 * @returns HTMLDivElement that contains CV Application.
 */
const CV : FC<CVProps> = ({
        address, 
        beginEducation,
        beginEmployment,
        degree,
        email,
        employer,
        employerLocation,
        employmentBulletPoints,
        endEducation,
        endEmployment,
        firstName, 
        lastName, 
        linkedInLink,
        phone,
        profile, 
        profileImage,
        position,
        schoolLocation,
        schoolName,
        title
    }) => {

    return(
        <div className="cv-container">
            <div className="cv-header">
                <img className="cv-photo" alt="Profile" 
                    src={profileImage === null ? "" : URL.createObjectURL(profileImage)} 
                    onError={addDefaultSrc}/>
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
                <div>{profile}</div>
            </div>

            <div className="employment-history">
                <div className="section-label employment-label">Employment History</div>
                <div>{position}, {employer}, {employerLocation}</div>
                <div>{beginEmployment} - {endEmployment}</div>
                {
                    employmentBulletPoints.map((bullet: any, index) => (
                        <ul key={index}>
                            {bullet.bulletpoint && <li>{bullet.bulletpoint}</li>}
                        </ul>
                    ))
                }
            </div>

            <div className="education-history">
                <div className="section-label education-label">Education History</div>
                <div>{degree}, {schoolName}, {schoolLocation}</div>
                <div>{beginEducation} - {endEducation}</div>
            </div>
        </div>
    );
}

export default CV;