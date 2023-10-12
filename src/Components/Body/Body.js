import React, { useState } from 'react'
import StudentsCard from '../StudentsCard/StudentsCard';
import img from '../../assets/img.png'
import '../../App.css'
import './body.css';
const Body = () => {
    const [ input, setInput ] = useState("");

    const fetchData = (value)=>{
       
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((json)=>console.log(json))
    }

    const handleInput = (value)=>{
        setInput(value);
        fetchData(value);
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

            <div className="collegeTag">
                <div className="collageName">
                    Arya College of Engineering
                </div>
                <div className="filter">

                </div>

            </div>
            <div className='flex flex-wrap gap-5  p-6 justify-center items-center'>

                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single" />
                <StudentsCard  name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle" />
                <StudentsCard  Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single"/>
                <StudentsCard  name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Mingle"/>
                <StudentsCard Img={img} name="Hitesh" like="5k" branch="cs" Achievements="3rd Rank" skills="Java" likes="Gym" dislikes="weakness" goals="CEO" relationship="Single"/>
            </div>

        </div>
    )
}

export default Body
