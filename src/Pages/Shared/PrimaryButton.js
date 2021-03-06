import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">Get {children}</button>
    );
};

export default PrimaryButton;