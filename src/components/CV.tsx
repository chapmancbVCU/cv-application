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
            <div>
                <h2>{firstName} {lastName}</h2>
                <h3>{title}</h3>
            </div>
        </div>
    );
    
}

export default CV;