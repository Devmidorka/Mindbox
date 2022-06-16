import React from 'react';

const AccordionControl = ({setIsOpen, isOpen}) => {
    return (
        <div
            className={`accordionControl ${isOpen ? 'opened' : ''}`}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <span/>
        </div>
    );
};

export default AccordionControl;