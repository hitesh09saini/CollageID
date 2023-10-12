import React, { useState } from 'react'

import Colleges from '../Colleges/Colleges';
import '../../App.css'
import './body.css';
const Body = () => {
    const [ input, setInput ] = useState("");

    const handleInput = (value)=>{
        setInput(value);
        // fetchData(value);
    }
    return (
        <div className='body-cont'>
            <div className="plus"><i class="fa-solid fa-address-card fa-2xl" style={{ color: "#2a092a" }}></i></div>
            <div className="cont-search">
                <div className='input'>
                    <input type="search" id="search" value={input} onChange={(e)=> handleInput(e.target.value)} name="search" placeholder='Search College' />
                    <div className='icons'>
                        <i class="fa-solid fa-magnifying-glass fa-xl" style={{ color: "white" }}></i>
                    </div>

                </div>


            </div>
    
            <Colleges></Colleges>
           

        </div>
    )
}

export default Body
