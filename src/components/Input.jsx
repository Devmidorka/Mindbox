import React, {useState} from 'react';

const Input = ({onKeyDown}) => {
    const [value, setValue] = useState('')
    return (
        <input
            type="text"
            placeholder={'What needs to be done?'}
            value={value}
            onKeyDown={(e) => onKeyDown(e, setValue)}
            onChange={e => setValue(e.target.value)}
        />
    );
};

export default Input;