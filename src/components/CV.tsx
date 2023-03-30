/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC} from 'react';

interface CVProps {
    firstName: string;
    lastName: string;
    profile: string;
    title: string;
}

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
            </div>

            <div className="cv-profile">
            <div className="section-label profile-label">Profile</div>
                <div className="profile">{profile}</div>
            </div>
        </div>
    );
}

export default CV;