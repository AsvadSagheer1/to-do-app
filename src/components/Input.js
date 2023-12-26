import React from 'react';

export default function Input({
    className,
    value,
    onChange,
    placeholder,
    ariaDescribedby,
    onClick,
    isDisabled,
    type,
    style,
    isChecked
}) {
    const handleChange = (e) => {
        if (onChange && typeof onChange === 'function') {
            onChange(e);
        }
    };

    const handleClick = () => {
        if (onClick && typeof onClick === 'function') {
            onClick();
        }
    }
    return (
        <input
            className={className}
            value={value}
            onChange={handleChange}
            onClick={handleClick}
            placeholder={placeholder}
            aria-describedby={ariaDescribedby}
            type={type}
            disabled={isDisabled}
            style={style}
            checked={isChecked}
        />
    );
}
