import { useState, useEffect, useRef } from 'react';
import './StyledDropdown.css';

function StyledDropdown({ options, onChange }) {
    const [selectedValue, setSelectedValue] = useState('Select an option');
    const [show, setShow] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleOnBlur);

        return () => {
            document.removeEventListener('click', handleOnBlur);
        }
    }, [])

    const handleOnBlur = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
            setShow(false);
        }
    }

    const handleValueSelection = (option) => {
        setSelectedValue(option.label);
        onChange(option.value);
        setShow(false);
    }

    return (
        <div className='dropdown-wrapper' ref={dropdownRef}>
            <div className='dropdown-selected' onClick={() => setShow(prev => !prev)}>
                {selectedValue}
                {selectedValue !== 'Select an option' && <button onClick={() => {
                    setSelectedValue('Select an option');
                    setShow(false);
                }}>x</button>}
            </div>
            {show && <div className='option-wrapper'>
                {options.map((option, idx) => (
                    <div key={idx} className='dropdown-option' onClick={() => handleValueSelection(option)}>{option.label}</div>
                ))}
            </div>}
        </div>
    )

}

export default StyledDropdown;