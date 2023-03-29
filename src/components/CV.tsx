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
            <h2>Sample CV Application</h2>
            <div className="cv-header">
                <h2 className="cv-header-text">{firstName} {lastName}</h2>
                <h3 className="cv-header-text">{title}</h3>
            </div>
        </div>
    );
    
}

export default CV;