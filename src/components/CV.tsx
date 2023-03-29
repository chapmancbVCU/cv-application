/******************************************************************************
 * IMPORTS                                                                    *
 *****************************************************************************/
import React, { FC} from 'react';

interface CVProps {
    firstName: string
}

const CV : FC<CVProps> = ({firstName}) => {
    return(
        <div className="cv-container">
            <h2>Sample Output</h2>
            <p>{firstName}</p>
        </div>
    );
    
}

export default CV;