import React, { useEffect, useState } from 'react'
import moment from 'moment';

export default function TimeCurrent() {
    //
    const [datetime, setDatetime] = useState(moment().format('llll'))
    useEffect(() => {
        const timeOut = setInterval(() => {
            setDatetime(moment().format('llll'))
        }, 60000);
        return () => {
            setInterval(timeOut);
        }
    }, [setDatetime]);
    //
    return (
        <li className='text-sm font-bold mb-0.5'>
            {datetime.replace(`, ${(new Date()).getFullYear()}`, '').replaceAll(',', '')}
        </li>
    )
}
