import React from 'react';

const AccordionControl = ({setIsOpen, isOpen}) => {
    // Не очень понял функционал, реализуемый данным компонентом.
    // Возможно он должен добавлять новый таск (реализавано по нажатию Enter)
    // Сделал из него контрол для выпадающего меню (по виду похоже :)
    return (
        <div
            className={`accordionControl ${isOpen ? 'opened' : ''}`}
            onClick={() => setIsOpen(prev => !prev)}
            data-testid={'toggle-button'}
        >
            <span/>
        </div>
    );
};

export default AccordionControl;