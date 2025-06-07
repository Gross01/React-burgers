import React from 'react';
import notFoundImage from '../../images/404.png'

const NotFound404 = () => {
    return (
        <div style={{margin: '0 auto'}}>
            <img src={notFoundImage} alt="404" width='600' height='600'/>
        </div>
    );
};

export default NotFound404;