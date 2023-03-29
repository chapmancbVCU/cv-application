/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC} from 'react';

interface CVProps {
    firstName: string;
    lastName: string;
}

const CV : FC<CVProps> = ({firstName, lastName}) => {
    return(
        <div className="cv-container">
            <h2>Sample CV Application</h2>
            <div>
                {firstName} {lastName}
            </div>
        </div>
    );
    
}

export default CV;