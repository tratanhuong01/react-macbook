import React, { forwardRef, useEffect, useRef, useState } from 'react'
import icons from '../../data/icons';

const ItemFooter = ({ icon, list, setList, pos, handleClick }, ref) => {
    //
    const index = [...list].findIndex(dt => dt.id === icon.id);
    const mini = [...list].findIndex(dt => dt.mini === true && dt.id === icon.id) === -1 ? false : true;
    const refLabel = useRef();
    const [open, setOpen] = useState();
    const main = icons.findIndex(dt => dt.id === icon.id);
    useEffect(() => {
        //
        let timeOut;
        if (open !== "open" && open) {
            timeOut = setTimeout(() => {
                setOpen("open");
                handleClick();
            }, 2000);
        }
        return () => {
            clearTimeout(timeOut)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, index])
    useEffect(() => {
        //
        if (refLabel && refLabel.current) {
            refLabel.current.style.left = `${((pos === 0 ? 0 : pos + 1) * ((ref.current.offsetWidth / (icons.length)))) -
                (pos === 0 ? 0 : ((refLabel.current.offsetWidth / 2)) - 24)}px`
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refLabel, ref]);
    const [hover, setHover] = useState();
    //
    return (
        <>
            <span ref={refLabel} className={`absolute whitespace-nowrap px-4 py-1.5 bg-gray-300
             ${open && open !== "open" ? index === -1 ? 'opening__min' : 'opening__max' : ''}`}
                style={{ display: hover === main ? 'flex' : 'none', bottom: 90 }}>
                {icon.name}
            </span>
            <div onClick={() => {
                setOpen(true)
            }} onMouseEnter={() => {
                setHover(main);
                let data = [];
                let start = (pos - 2 < 0 ? 0 : pos - 2);
                for (let index = start; index < pos; index++) {
                    if (index + 1 === pos) {
                        data.push(icons[index]);
                    }
                    else {
                        data.push({ ...icons[index], mini: true });
                    }
                }
                let end = (pos + 2 > icons.length - 1 ? icons.length - 1 : pos + 2);
                for (let index = end; index > pos; index--) {
                    if (index - 1 === pos) {
                        data.push(icons[index]);
                    }
                    else {
                        data.push({ ...icons[index], mini: true });
                    }
                }
                setList([...data, icon]);
            }} onMouseLeave={() => {
                setList([]);
                setHover()
            }}
                style={{
                    transition: `all 0.2s`
                }}
                className={`${index === -1 ? 'w-7 h-7' : mini ? 'transform w-12 h-12 -mt-6' :
                    'transform w-16 h-16 -mt-10'
                    } cursor - pointer ${open ? 'mb-1' : ''} 
                     ${open && open !== "open" ? index === -1 ? 'opening__min' : 'opening__max' : ''} `}>
                <img src={icon.src} alt={''} className='w-full h-full rounded-xl' />
                {open === "open" && <div className='w-1 h-1 rounded-full mx-auto my-1.5 bg-black'></div>}
            </div>
        </>
    )
}

export default forwardRef(ItemFooter)