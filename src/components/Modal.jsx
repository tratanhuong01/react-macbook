import React, { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext/ModalContext'

const ItemHeaderTop = ({ color, active, icon, handleClick }) => {
    return (
        <li onClick={() => {
            if (typeof handleClick === "function") {
                handleClick();
            }
        }} className={`text-xs flex item-center justify-center w-3.5 h-3.5 rounded-full 
        shadow-lg border-2 border-solid ${active ? color : 'border-gray-500 bg-gray-500'}`}>
            {active && <i className={`${icon} text-white`}></i>}
        </li>
    )
}

const ModalHeader = ({ active, title, id }) => {
    //
    const { state: { data }, dispatch, actions } = useContext(ModalContext);
    //
    return (
        <div className='py-2 border-b-2 border-solid border-gray-200 relative'>
            <ul className='pl-2 flex items-center gap-1.5'>
                <ItemHeaderTop color={'border-red-500 bg-red-500'} active={active}
                    icon={`bx bx-x`} handleClick={() => {
                        dispatch(actions.updateData('data', [...data].filter(dt => dt.id !== id)))
                    }} />
                <ItemHeaderTop color={'border-yellow-500 bg-yellow-500'} active={active}
                    icon={`bx bx-minus`} handleClick={() => {
                    }} />
                <ItemHeaderTop color={'border-green-500 bg-green-500'} active={active}
                    icon={`bx bx-move-horizontal transform rotate-45`} handleClick={() => {
                    }} />
            </ul>
            <span className='text-sm font-bold absolute top-1/2 left-1/2 transform 
            -translate-y-1/2 -translate-x-1/2 text-gray-500'>{title}</span>
        </div>
    )
}

const Modal = ({ info, children, id }) => {
    //
    const { state: { active }, dispatch, actions } = useContext(ModalContext);
    //
    return (
        <div onClick={() => dispatch(actions.updateData(`active`, id))}
            className='bg-gray-100 absolute rounded-lg'
            style={{ width: info.width }}>
            <ModalHeader active={active === id} title={info.title} id={id} />
            <div className='w-full' style={{ height: info.height }}>
                {children}
            </div>
        </div>
    )
}

export default Modal