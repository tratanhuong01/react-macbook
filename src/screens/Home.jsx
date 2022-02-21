import React, { useContext, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import background from "../assets/images/background.png"
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemDisplay from '../components/Home/ItemDisplay'
import Modal from '../components/Modal'
import { ModalContext } from '../contexts/ModalContext/ModalContext'

const ItemDrag = ({ children, position }) => {
    //
    const ref = useRef();
    //
    return (
        <Draggable nodeRef={ref} defaultPosition={position ? position : {}}>
            <div ref={ref} className='w-32 mx-2 mb-2'>
                {children}
            </div>
        </Draggable>
    )
};

const Home = () => {
    //
    const [active, setActive] = useState();
    const { state: { data } } = useContext(ModalContext);
    //
    return (
        <div className='w-full h-screen flex flex-col overflow-hidden' style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
        }}>
            <Header />
            <div className='w-full flex flex-1 relative'>
                <ItemDrag>
                    <ItemDisplay active={active} label={`260347987_860340711422545_5819341585161953123_n.jpeg`}
                        image={`https://res.cloudinary.com/ensonet-dev/image/upload/v1644752772/Avatars/1644752768557.jpg`}
                        id={0} setActive={setActive} />
                </ItemDrag>
                <ItemDrag>
                    <ItemDisplay active={active} label={`Avatars`}
                        image={`https://res.cloudinary.com/ensonet-dev/image/upload/v1645324907/Avatars/Dtafalonso-Yosemite-Flat-Folder_jzum1s.ico`}
                        id={1} setActive={setActive} />
                </ItemDrag>
                {data.map(item => <ItemDrag key={item.id} position={item.info.position}>
                    <Modal info={item.info} id={item.id}>
                        {item.child}
                    </Modal>
                </ItemDrag>)}
            </div>
            <Footer />
        </div>
    )
}

export default Home