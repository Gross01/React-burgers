import React from 'react';

const ErrorMessage = ({message}: {message: string}) => {
    return (
        <span className='text text_type_main-small' style={{color: 'red', textAlign: 'center'}}>{message}</span>
    );
};

export default ErrorMessage;