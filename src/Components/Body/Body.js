import React from 'react'
import './body.css';
const Body = () => {
    return (
        <div className='body-cont'>
            <div className="plus"><i class="fa-solid fa-address-card fa-2xl" style={{color: "#2a092a"}}></i></div>
            <div className='input'>
                <input type="search" id="search" name="search" placeholder='Search College' />
                <div className='icons'>
                    <i class="fa-solid fa-magnifying-glass fa-xl" style={{ color: "white" }}></i>
                </div>

            </div>

        </div>
    )
}

export default Body
