import React, { useEffect, useRef, useState } from 'react'

const ItemDisplay = ({ active, label, image, id, setActive }) => {
    //
    const ref = useRef();
    const [edit, setEdit] = useState();
    const [name, setName] = useState(label);
    const refInput = useRef();
    useEffect(() => {
        //
        const handle = (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                setEdit(!edit);
            }
        }
        if (ref.current && refInput.current) {
            refInput.current.innerText = name.substring(0, 30);
            if (active === id) {
                ref.current.focus();
                ref.current.addEventListener('keydown', handle)
            }
            else {
                ref.current.removeEventListener('keydown', handle)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, active, refInput, edit])
    //
    return (
        <div ref={ref} onClick={() => setActive(id)} className={`w-36 h-24 transform scale-90 rounded-md`}>
            <div className={`w-20 mx-auto h-20 ${active === id ? 'bg-black bg-opacity-50' : ''} flex items-center 
            justify-center`} tabIndex={edit ? 1 : 0}>
                <img src={image}
                    alt={``} className={`w-20 h-20 object-contain rounded-md`} />
            </div>
            <div className='mt-0.5'>
                <p ref={refInput} onInput={(event) => {
                    if (edit) {
                        setName(event.currentTarget.textContent);
                    }
                }} className={`text-white text-center break-words font-semibold p-1 text-xs 
                ${active === id ? 'bg-blue-500' : ''}`} contentEditable={edit}>
                </p>
            </div>
        </div>
    )
}

export default ItemDisplay