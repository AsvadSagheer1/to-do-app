import React from 'react'
export default function Button({
    onClick,
    children,
    isDisabled,
    btnSm,
    id
}) {
    return (
        <button style={{ backgroundColor: "#A879E2" }} id={id} className={`${isDisabled} ${btnSm} btn text-white fw-bolder`} onClick={() => onClick()}>{children}</button >
    )
}
