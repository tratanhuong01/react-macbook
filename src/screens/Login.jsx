import React, { useContext, useEffect, useRef, useState } from 'react'
import login from "../assets/images/login.png";
import ButtonComponent from '../components/core/ButtonComponent';
import InputComponent from '../components/core/InputComponent';
import LoadingLogin from '../components/Login/LoadingLogin';
import { AppContext } from '../contexts/AppContext/AppContext';

const ButtonLogin = ({ icon, label }) => {
    return (
        <div className=''>
            <ButtonComponent className={`w-8 mx-auto h-8 rounded-full flex items-center justify-center 
                    cursor-pointer bg-gray-300 bg-opacity-70`}>
                <i className={`${icon} text-3xl`}></i>
            </ButtonComponent>
            <p className='text-center mt-1.5 font-semibold text-xs'>{label}</p>
        </div>
    )
}

const Login = () => {
    //
    const { state: { logining }, dispatch, actions } = useContext(AppContext);
    const suggest = "2001";
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const ref = useRef();
    const handleCheck = () => {
        if (password.length > 0) {
            if (suggest === password) {
                dispatch(actions.updateData('logining', true));
            } else {
                setError("Password incorrect.")
            }
        }
    }
    useEffect(() => {
        //
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                handleCheck();
            }
        }
        if (ref && ref.current) {
            ref.current.addEventListener('keydown', handleKeyDown)
        }
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, password])
    //
    return (
        <div ref={ref} className='w-full h-screen flex items-center justify-center' style={{
            backgroundImage: `url(${login})`,
            backgroundSize: 'cover'
        }}>
            <div className="">
                <img src='https://res.cloudinary.com/ensonet-dev/image/upload/v1644752772/Avatars/1644752768557.jpg'
                    alt='' className='w-24 h-24 mx-auto rounded-full object-contain bg-white' />
                <p className="text-center font-semibold text-white mt-3.5">Huong Dev</p>
                {logining ? <>
                    <LoadingLogin />
                </> :
                    <>
                        <div className='w-48 mx-auto flex relative justify-center'>
                            <InputComponent type={'password'} wrapper={'my-4'} className={`w-40 text-white rounded-full p-2 
                            bg-gray-300 bg-opacity-70 text-sm placeholder:text-gray-300 ${password.length > 0 ? 'pr-12' : ''}`}
                                placeholder={`Enter Password`} handleChange={(event) => {
                                    setPassword(event.target.value);
                                    if (error) setError();
                                }} />
                            <i onClick={handleCheck} className={`${password.length > 0 ? 'bx bx-right-arrow-circle' : 'bx bx-help-circle'} text-3xl text-white absolute top-1/2 transform 
                            -translate-y-1/2 cursor-pointer ${password.length > 0 ? 'right-5' : '-right-5'}`}></i>
                        </div>
                        {error && <p className='text-red-200 text-xs font-semibold text-center mb-5 -mt-2'>{error}</p>}
                        <p className='mb-2 -mt-2 text-xs text-white text-center'>{`Suggest : ${suggest}`}</p>
                        <div className='w-48 mx-auto text-white flex items-center justify-between mt-32'>
                            <ButtonLogin icon={`bx bx-power-off`} label={`Shutdown`} />
                            <ButtonLogin icon={`bx bx-refresh`} label={`Restart`} />
                        </div>
                    </>}
            </div>
        </div>)
}

export default Login