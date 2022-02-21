import React, { useContext, useRef, useState } from 'react'
import { v4 } from 'uuid';
import { ModalContext } from '../contexts/ModalContext/ModalContext';
import icons from '../data/icons'
import ItemFooter from './Home/ItemFooter'

const Footer = () => {
    //
    const [list, setList] = useState([]);
    const ref = useRef();
    const { state: { data }, dispatch, actions } = useContext(ModalContext);
    //
    return (
        <div ref={ref} className='flex px-3 pb-2 pt-2 rounded-xl mb-1 bg-gray-300 bg-opacity-50 items-end mx-auto'>
            <ul className='flex gap-2 relative'>
                {icons.map((icon, index) => icon.name ? <ItemFooter key={icon.id} icon={icon} list={list}
                    setList={setList} pos={index} ref={ref}
                    handleClick={() => {
                        dispatch(actions.updateData('data', [...data, {
                            id: v4(),
                            info: {
                                width: 300,
                                height: 500,
                                title: icon.name,
                                position: {
                                    x: 30,
                                    y: 50
                                }
                            },
                            children: ""
                        }]))
                    }} /> : "")}
            </ul>
        </div>
    )
}

export default Footer