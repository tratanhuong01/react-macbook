import React, { useContext } from 'react'
import icon from "../assets/images/icon.png";
import { AppContext } from '../contexts/AppContext/AppContext';

function Wellcome() {
    //
    const { state: { loading } } = useContext(AppContext);
    //
    return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className=''>
                <img src={icon} alt='' className='w-36 h-36 object-cover' />
                {loading && <div className='mt-40'>
                    <iframe src="https://giphy.com/embed/XSlH7fBwkIra3skKLj" width="28"
                        height="28" className='mx-auto' title='12' ></iframe>
                </div>}
            </div>
        </div>
    )
}

export default Wellcome