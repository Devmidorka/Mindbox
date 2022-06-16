import React from 'react';
import Input from "./Input";
import AccordionControl from "./AccordionControl";

const ControlPanel = ({setIsOpen, isOpen, controlChange}) => {
    return (
        <div className={'controlPanel'}>
            <AccordionControl
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
            <Input onKeyDown={controlChange}/>
        </div>
    );
};

export default ControlPanel;