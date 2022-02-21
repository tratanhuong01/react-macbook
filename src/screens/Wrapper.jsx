import React, { useContext, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext/AppContext'
import { ModalProvider } from '../contexts/ModalContext/ModalContext';
import Login from './Login';

const Wrapper = () => {
    //
    const { state: { data }, dispatch, actions } = useContext(AppContext);
    useEffect(() => {
        //
        const updateLoading = () => {
            dispatch(actions.updateData('loading', true));
        }
        const updateLogin = () => {
            dispatch(actions.updateData('data', <Login />));
        }
        setTimeout(updateLoading, 500);
        setTimeout(updateLogin, 1000);
        return () => {
            clearTimeout(updateLoading);
            clearTimeout(updateLogin);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //
    return (
        <ModalProvider>
            {data}
        </ModalProvider>
    )
}

export default Wrapper