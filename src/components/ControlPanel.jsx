import React from 'react';
import Input from "./Input";
import AccordionControl from "./AccordionControl";

const ControlPanel = ({setIsOpen, isOpen, addNewTask}) => {
    return (
        <div className={'controlPanel'}>
            <AccordionControl
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
            <Input onKeyDown={addNewTask}/>
        </div>
    );
};

export default ControlPanel;