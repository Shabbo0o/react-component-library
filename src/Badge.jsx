// import React from 'react';
import './Badge.css'; 
import { IconContext } from 'react-icons';


export default function Badge({ color, size, icon: Icon}) {
    return (
        <div className={`badge ${color} ${size}`}>
        <IconContext.Provider value={{size: size}}>
            <Icon className="badge-icon" />
        </IconContext.Provider>
        <span className='badge-text'>Badge</span>

        </div>
    )
}