import React, {useState} from 'react';

const Checkbox = ({state, onChange}) => {
    const [isChecked, setIsChecked] = useState(state)
    function change(e){
        setIsChecked(e.target.checked)
        console.log(onChange)
        onChange(e.target.checked)
    }

    return (
        <label className='checkboxWrapper'>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(change)}
            />
            <span className='checkbox'/>
        </label>
    );
};

export default Checkbox;