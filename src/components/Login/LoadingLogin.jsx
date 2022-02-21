import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext';
import Home from '../../screens/Home';

export default function LoadingLogin() {
    //
    const { dispatch, actions } = useContext(AppContext);
    const [time, setTime] = useState(0);
    useEffect(() => {
        //
        const timeOut = setTimeout(() => {
            if (time === 8) {
                dispatch(actions.updateData('data', <Home />));
                dispatch(actions.updateData('logining', false));
                clearTimeout(timeOut);
            }
            else {
                setTime(time => time + 1)
            }
        }, 500);
        return () => {
            clearTimeout(timeOut);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);
    //
    return (
        <div className='w-52 mx-auto relative mt-12'>
            <div className='w-full bg-gray-300 h-1.5 rounded-full'>
            </div>
            <div className='bg-white absolute top-0 left-0 h-1.5 rounded-full'
                style={{ width: `${time * (100 / 8)}%` }}>
            </div>
        </div>
    )
}
