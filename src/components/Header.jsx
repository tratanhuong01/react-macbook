import React from 'react'
import headerLeft from '../data/headerLeft'
import headerRight from '../data/headerRight'
import TimeCurrent from './Home/TimeCurrent'

const Header = () => {
    return (
        <div className='flex px-2 py-0.5 bg-gray-300 bg-opacity-50 items-start justify-between'>
            <ul className='flex text-sm items-center gap-4 text-gray-900'>
                <li className='bx bxl-apple text-xl cursor-pointer'></li>
                <li className='font-bold cursor-pointer'>Finder</li>
                {headerLeft.map(item => <li key={item.id} className='cursor-pointer'>
                    {item.name}
                </li>)}
            </ul>
            <ul className='flex items-center gap-4 text-gray-700'>
                {headerRight.map(item => <li className='cursor-pointer hover:text-gray-500'
                    key={item.id}>
                    <i className={`${item.icon} text-base`}></i>
                </li>)}
                <TimeCurrent />
            </ul>
        </div>
    )
}

export default Header