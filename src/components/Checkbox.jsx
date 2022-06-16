import React, {useState} from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <label className='checkboxWrapper'>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <span className='checkbox'/>
        </label>
    );
};

export default Checkbox;