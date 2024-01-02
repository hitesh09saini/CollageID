import axios from 'axios';
import React, { useState } from 'react';
import './Colleges.css'
import url from '../../assets/collegeImg.jpg'

const CreateCollege = () => {
    const [view, setView] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [branch, setBranch] = useState([]);
    const [logo, setLogo] = useState('');
    const [inxBranch, setInxBranch] = useState('');
    const [img, setImg] = useState(url)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/college/register`, {
                name,
                location,
                logo,
                branch,
            });
            console.log('College added successfully');
            setView(false)
        } catch (error) {
            console.log('Error creating college');
        }
    };

    const handleBranchChange = (e) => {
        if (e.key !== 'Enter') return;
        setBranch([...branch, inxBranch]);
        setInxBranch('');
    };

    const handleImg = (path) => {
        if (path) {
            setLogo(path); 
            setImg(URL.createObjectURL(path));
        }
    }

    return (
        <div className='bg-red-100 w-fit p-2'>
            <h1 className='text-center text-xl font-bold'>Add Your College</h1>
            <p onClick={() => setView(!view)} className='text-center bg-white hover:bg-gray-100 active:bg-gray-300 cursor-pointer'><i className="fa-solid fa-plus"></i></p>
            {view ? (
                <div className={`form-container flex flex-col gap-2 `}>
                <form onSubmit={handleSubmit} className=' flex flex-col relative gap-4' >
                    <span onClick={()=> setView(!view)} className='text-2xl absolute p-2 top-[-20px] right-[-30px] bg-red-600 font-bold rotate-45 hover:bg-red-500 select-none  active:text-yellow-600 cursor-pointer'>+</span>
                    <h1 className='p-2 bg-white text-2xl text-center'>College Form</h1>

                    <label htmlFor="logo"><img src={img} alt="img" /></label>

                    <input type="file" id="logo" onChange={(e) => handleImg(e.target.files[0])} className="hidden pointer" />

                    <input type="text" placeholder='College Name' name="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-1 border rounded" />

                    <input type="text" placeholder='College Location' name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 p-1 border rounded" />

                    <input
                        placeholder='Add Branch'
                        type="text"
                        value={inxBranch}
                        onChange={(e) => setInxBranch(e.target.value)}
                        onKeyDown={handleBranchChange}
                        className="mt-1 p-1 border rounded"
                    />
                    <button type="submit" className=" text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-2 bg-blue-500">Submit</button>
                </form>
             </div>
             ) : null} 
            
        </div>
    );
}

export default CreateCollege;
