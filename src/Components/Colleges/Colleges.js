import React, { useEffect, useState } from 'react';
import StudentsCard from '../StudentsCard/StudentsCard';
import './Colleges.css';
import collegeIMG from '../../assets/collegeImg.jpg';
import axios from 'axios';

const Colleges = ({ datas }) => {
    const [StudentData, setStudentData] = useState([]);
    const [branchs, setBranchs] = useState(datas.branch);
    const [input, setInput] = useState('');

    const fetch = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_SERVER_URL}/api/v1/college/student/getStudents/${datas._id}`);
            setStudentData(res.data);
        } catch (error) {
            console.error('Error fetching Student Data', error);
        }
    };

    useEffect(() => {
        fetch();
        setBranchs(datas.branch);
    }, [datas.branch, datas._id]);

    const handleFilterStudentsByName = (val) => {
        setInput(val);
        setStudentData((prevData) =>
            prevData.filter(
                (item) =>
                    item.name.toLowerCase().includes(val.toLowerCase()) || item.username.toLowerCase().includes(val.toLowerCase())
            )
        );
    };

    const handleFilterStudentsByBranch = (val) => {
        if (val === 'select') return;
        setStudentData((prevData) =>
            prevData.filter((item) => item.colleges.branch.toLowerCase().includes(val.toLowerCase()))
        );
    };

    const handleFilterStudentsByRelationShip = (val) => {
        if (val === 'select') return;
        setStudentData((prevData) => prevData.filter((item) => item.relationship.toLowerCase().includes(val.toLowerCase())));
    };

    return (
        <div className="relative">
            <div key={datas._id} className="collegeTag bg-gray-500 p-6">
                <div className="text-4xl font-bold text-white">
                    <div className="flex text-xl justify-between">
                        <div
                            className="collegeIMG"
                            style={{ backgroundImage: `url(${datas.logo.secure_url || collegeIMG})` }}
                        ></div>
                        <p className="flex gap-[10px] items-center h-fit">
                            <i className="fa-solid fa-location-dot fa-lg" style={{ color: '#37114b' }}></i>
                            {datas.location || 'India'}
                        </p>
                    </div>
                    {datas.name || 'College Name'}
                </div>
            </div>
            <div className="p-5 border-2 md:flex justify-between">
                <input
                    placeholder="Search Student"
                    value={input}
                    type="text"
                    onChange={(e) => handleFilterStudentsByName(e.target.value)}
                    className="border border-black self-end outline-none p-1 pl-4 rounded-2xl"
                />
                <div className="w-fit h-fit">
                    <div className="border h-fit w-fit m-2">
                        <select onChange={(e) => handleFilterStudentsByBranch(e.target.value)} className="p-2 outline-0">
                            {branchs.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                            <option value="select">Select Branch</option>
                        </select>
                    </div>
                    <div className="border m-2 h-fit w-fit">
                        <select
                            onChange={(e) => handleFilterStudentsByRelationShip(e.target.value)}
                            className="p-2 outline-0"
                        >
                            <option value="select">Select relationship</option>
                            <option value="single">Single</option>
                            <option value="mingle">Mingle</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 p-6 justify-center items-center">
                {StudentData.map((item) => (
                    <StudentsCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Colleges;
