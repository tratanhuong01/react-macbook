import React from 'react'

export default function InputComponent({ error, className, handleChange, name, type, placeholder,
    wrapper }) {
    return (
        <div className={`${wrapper}`}>
            <input type={type} className={className} onChange={(event) => {
                if (typeof handleChange === "function") {
                    handleChange(event);
                }
            }} name={name} placeholder={placeholder} />
            {error && <p className='text-red-500 font-semibold my-1'></p>}
        </div>
    )
}
