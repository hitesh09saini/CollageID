import React, { useState } from 'react'

// import Colleges from '../Colleges/Colleges';
import '../../App.css'
import './body.css';
const Body = () => {
    const [input, setInput] = useState("");
    const [listResult, setListResult] = useState([]);


    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => {


                const result = json.filter((user) => {
                    return user && user.name && user.name.toLowerCase().includes(value);
                });

                setListResult(result);
                
            })

    }

    const handleInput = (value) => {
        setInput(value);
        fetchData(value);
    }
    return (
        <div className='body-cont'>
            <div className="plus"><i className="fa-solid fa-address-card fa-2xl" style={{ color: "#2a092a" }}></i></div>
            <div className="cont-search">
                <div className='input'>
                    <input type="search" id="search" value={input}  onChange={(e) => handleInput(e.target.value)} name="search" placeholder='Search College' />
                    <div className='icons'>
                        <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: "white" }}></i>
                    </div>

                </div>

                <div className='results-list'>
                   {

                    listResult.map((val,inx)=>{
                        return <div key={inx}>{val.name}</div>;
                    })

                   }
                  
                </div>


            </div>

            {/* <Colleges ></Colleges> */}


        </div>
    )
}

export default Body
