import React from 'react'
export default function Button({
    onClick,
    children,
    isDisabled,
    btnClass,
    id
}) {
    return (
        <button style={{ backgroundColor: "#A879E2" }} id={id} className={`${isDisabled} ${btnClass} btn text-white fw-bolder`} onClick={() => onClick()}>{children}</button >
    )
}
