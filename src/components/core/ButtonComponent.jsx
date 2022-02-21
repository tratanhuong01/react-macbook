import React from 'react'

const ButtonComponent = ({ children, link, className, handleClick }) => {
    return (
        link ? <button className={className}>children</button> :
            <button className={className} onClick={() => {
                if (typeof handleClick === "function") {
                    handleClick();
                }
            }}>{children}</button>
    )
}

export default ButtonComponent