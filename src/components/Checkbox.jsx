import React, {useState} from 'react';

const Checkbox = ({state, onChange, todoId}) => {
    const [isChecked, setIsChecked] = useState(state)
    function change(e){
        setIsChecked(e.target.checked)
        onChange(todoId, e.target.checked)
    }

    return (
        <label className='checkboxWrapper'>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={change}
                data-testid={isChecked ? 'completed-task' : 'uncompleted-task'}
            />
            <span className='checkbox'/>
        </label>
    );
};

export default Checkbox;