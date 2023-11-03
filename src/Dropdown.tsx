import React, { useState, useRef } from 'react';
import './App.css';

function Dropdown({ options, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Select an option');
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelectedValue(option.label);
        onChange(option.value);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedValue}
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map((option, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
