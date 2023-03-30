/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC} from 'react';

interface CVProps {
    title: string
    firstName: string;
    lastName: string;
}

const CV : FC<CVProps> = ({firstName, lastName, title}) => {
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
        </div>
    );
}

export default CV;